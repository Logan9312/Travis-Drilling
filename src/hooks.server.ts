import { redirect, type Handle } from '@sveltejs/kit';
import { canonicalPaths } from '$lib/site';

export const handle: Handle = async ({ event, resolve }) => {
	const path = event.url.pathname.replace(/\/+$/, '') || '/';
	const target = canonicalPaths[path.toLowerCase()];

	// Visitors type URLs in lowercase; the About page was folded into Home.
	if (target && target !== path) {
		const [targetPath, hash] = target.split('#');
		redirect(308, targetPath + event.url.search + (hash ? `#${hash}` : ''));
	}

	return resolve(event);
};
