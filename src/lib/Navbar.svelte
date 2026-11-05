<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { Menu, X } from 'lucide-svelte';
	import CallButton from '$lib/CallButton.svelte';
	import { navItems } from '$lib/site';

	let menuOpen = $state(false);
	let scrollY = $state(0);
	let activeSection = $state('');

	const isHome = $derived(page.url.pathname === '/');
	// Home has a full-bleed photo hero; the bar overlays it until the visitor
	// scrolls or opens the menu, then turns solid. It stays pinned everywhere so
	// the call button is always one tap away.
	const overlay = $derived(isHome && !menuOpen && scrollY < 24);

	const sectionIds = navItems
		.filter((item) => item.href.startsWith('/#'))
		.map((item) => item.href.slice(2));

	afterNavigate(() => (menuOpen = false));

	// Mark the Home section the visitor is reading.
	$effect(() => {
		if (!isHome) {
			activeSection = '';
			return;
		}
		void scrollY;
		const line = 140;
		let current = '';
		for (const id of sectionIds) {
			const el = document.getElementById(id);
			if (el && el.getBoundingClientRect().top <= line && el.getBoundingClientRect().bottom > line)
				current = id;
		}
		activeSection = current;
	});

	function isCurrent(href: string) {
		if (href.startsWith('/#')) return isHome && activeSection === href.slice(2);
		return page.url.pathname === href;
	}
</script>

<svelte:window bind:scrollY onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)} />

<nav
	aria-label="Main"
	class="{isHome
		? 'fixed'
		: 'sticky'} top-0 z-50 w-full transition-[background-color,box-shadow] {overlay
		? 'bg-transparent'
		: 'bg-white shadow-sm'}"
>
	<div class="page-container flex items-center justify-between gap-3 py-2.5 lg:py-3">
		<a href="/" class="shrink-0" aria-label="Travis Drilling, home">
			<img
				src={overlay ? '/img/logo_white.png' : '/img/logo.png'}
				width="80"
				height="80"
				alt=""
				class="h-14 w-14 lg:h-18 lg:w-18"
			/>
		</a>

		<!-- Desktop -->
		<div class="hidden items-center gap-8 lg:flex">
			<ul class="flex items-center gap-7">
				{#each navItems as item (item.href)}
					<li>
						<a
							href={item.href}
							aria-current={isCurrent(item.href)
								? item.href.startsWith('/#')
									? 'location'
									: 'page'
								: undefined}
							class="border-b-2 py-1 font-bold transition-colors {isCurrent(item.href)
								? 'border-brand'
								: 'border-transparent'} {overlay
								? 'text-white hover:border-white/60'
								: 'hover:text-ink text-slate-700 hover:border-slate-300'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<CallButton size="sm" surface={overlay ? 'dark' : 'light'} />
		</div>

		<!-- Phone: the call button never hides behind the menu -->
		<div class="flex items-center gap-1 lg:hidden">
			<CallButton size="sm" surface={overlay ? 'dark' : 'light'} />
			<button
				class="{overlay
					? 'text-white'
					: 'text-ink'} -mr-2 flex h-11 w-11 items-center justify-center rounded-md"
				type="button"
				onclick={() => (menuOpen = !menuOpen)}
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			>
				{#if menuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	{#if menuOpen}
		<div id="mobile-menu" class="border-t border-slate-200 bg-white shadow-lg lg:hidden">
			<ul class="page-container py-2">
				{#each navItems as item (item.href)}
					<li class="border-b border-slate-100 last:border-0">
						<a
							href={item.href}
							aria-current={isCurrent(item.href) ? 'page' : undefined}
							onclick={() => (menuOpen = false)}
							class="flex min-h-13 items-center justify-between text-lg font-bold active:bg-slate-50 {isCurrent(
								item.href
							)
								? 'text-brand-deep'
								: 'text-ink'}"
						>
							{item.label}
							{#if isCurrent(item.href)}
								<span class="bg-brand h-2 w-2 rounded-full" aria-hidden="true"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>

{#if menuOpen}
	<button
		type="button"
		class="bg-ink/40 fixed inset-0 z-40 lg:hidden"
		aria-label="Close menu"
		tabindex="-1"
		onclick={() => (menuOpen = false)}
	></button>
{/if}
