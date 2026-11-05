#!/usr/bin/env node
// Screenshot harness for UX review rounds.
//
//   bun run capture [outDir]          (default: ux-shots/latest)
//
// Builds the site, serves the production build with `vite preview`, and
// captures every route at desktop (1440) and phone (390) CSS widths, plus
// interaction states (mobile menu open, email copied) and the 404 page.
// Files are named <nn>-<screen>-<desktop|phone>.png at 1x device scale.
//
// Set CHROMIUM_PATH to reuse an already-installed Chromium instead of
// running `npx playwright install chromium`. On hosts without system browser
// libraries, also point LD_LIBRARY_PATH (and FONTCONFIG_FILE) at a local copy.
// Set SKIP_BUILD=1 to reuse the last `vite build` output.

import { spawn, execSync } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';

const outDir = resolve(process.argv[2] ?? 'ux-shots/latest');
const port = 4791;
const base = `http://localhost:${port}`;

const viewports = {
	desktop: { width: 1440, height: 900 },
	phone: { width: 390, height: 844 }
};

/** @type {{ id: string, path: string, only?: keyof typeof viewports, fullPage?: boolean, act?: (page: import('playwright').Page) => Promise<void> }[]} */
const shots = [
	{ id: '01-home', path: '/', fullPage: true },
	{ id: '02-home-fold', path: '/', fullPage: false },
	{
		id: '03-home-menu',
		path: '/',
		only: 'phone',
		fullPage: false,
		act: async (page) => {
			await page.getByRole('button', { name: /navigation|menu/i }).click();
		}
	},
	// /About was folded into Home; the old URL should land on the #about section.
	{ id: '04-about-redirect', path: '/About', fullPage: false },
	{ id: '05-contact', path: '/Contact', fullPage: true },
	{
		id: '06-contact-copied',
		path: '/Contact',
		fullPage: false,
		act: async (page) => {
			await page
				.getByRole('button', { name: /copy .*@/i })
				.first()
				.click();
		}
	},
	{ id: '07-lowercase-contact', path: '/contact', fullPage: false },
	{ id: '08-not-found', path: '/does-not-exist', fullPage: true },
	{
		// Sticky header + current-section state while reading Home.
		id: '09-home-scrolled',
		path: '/',
		fullPage: false,
		act: async (page) => {
			await page.evaluate(() => document.getElementById('area')?.scrollIntoView());
		}
	}
];

function waitForServer(url, timeoutMs = 30000) {
	const started = Date.now();
	return new Promise((resolvePromise, reject) => {
		const tick = async () => {
			try {
				await fetch(url);
				resolvePromise();
			} catch {
				if (Date.now() - started > timeoutMs) reject(new Error(`Server not up at ${url}`));
				else setTimeout(tick, 250);
			}
		};
		tick();
	});
}

if (!process.env.SKIP_BUILD) {
	execSync('bunx vite build', { stdio: ['ignore', 'ignore', 'inherit'] });
}

const server = spawn('bunx', ['vite', 'preview', '--port', String(port), '--strictPort'], {
	stdio: 'ignore',
	detached: true
});

try {
	await waitForServer(base);
	rmSync(outDir, { recursive: true, force: true });
	mkdirSync(outDir, { recursive: true });

	const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });

	for (const [vpName, viewport] of Object.entries(viewports)) {
		for (const shot of shots) {
			if (shot.only && shot.only !== vpName) continue;

			// Fresh context per shot: no carried scroll, height, or component state.
			const context = await browser.newContext({
				viewport,
				deviceScaleFactor: 1,
				reducedMotion: 'reduce',
				isMobile: vpName === 'phone',
				hasTouch: vpName === 'phone',
				permissions: ['clipboard-read', 'clipboard-write']
			});
			const page = await context.newPage();
			// Analytics is irrelevant to layout and slows/flakes captures.
			await page.route(/googletagmanager|google-analytics/, (route) => route.abort());

			await page.goto(base + shot.path, { waitUntil: 'networkidle' });
			await page.evaluate(() => document.fonts.ready);

			if (shot.fullPage) {
				// Trigger lazy images, then return to the top.
				await page.evaluate(async () => {
					for (const img of document.querySelectorAll('img[loading="lazy"]')) img.loading = 'eager';
					window.scrollTo(0, document.body.scrollHeight);
					await new Promise((r) => setTimeout(r, 150));
					window.scrollTo(0, 0);
				});
				await page.waitForLoadState('networkidle');
				await page.evaluate(() =>
					Promise.all([...document.images].map((i) => i.decode().catch(() => {})))
				);
			}

			if (shot.act) {
				await shot.act(page);
				// Let swapped icons and toasts paint; capturing right after a tap can
				// miss them (seen with the menu's close icon under touch emulation).
				await page.waitForTimeout(400);
			}

			const file = resolve(outDir, `${shot.id}-${vpName}.png`);
			await page.screenshot({ path: file, fullPage: !!shot.fullPage });
			console.log(file);

			// Tall pages get downscaled into illegibility by image viewers, so also
			// save readable slices (<file>.partN.png) of about two viewports each.
			if (shot.fullPage) {
				const total = await page.evaluate(() => document.documentElement.scrollHeight);
				const sliceHeight = viewport.height * 2;
				if (total > sliceHeight * 1.25) {
					for (let y = 0, n = 1; y < total; y += sliceHeight, n++) {
						const height = Math.min(sliceHeight, total - y);
						const part = file.replace(/\.png$/, `.part${n}.png`);
						await page.screenshot({
							path: part,
							fullPage: true,
							clip: { x: 0, y, width: viewport.width, height }
						});
					}
				}
			}
			await context.close();
		}
	}

	await browser.close();
} finally {
	process.kill(-server.pid);
}
