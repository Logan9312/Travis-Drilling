<script lang="ts">
	import { page } from '$app/state';
	import { Home, Menu, Phone, Info, Wrench, X, Droplets } from 'lucide-svelte';

	let navbarOpen = $state(false);
	let scrolled = $state(false);
	let { transparent = false } = $props();

	$effect(() => {
		transparent = page.url.pathname === '/';

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleNavbar() {
		navbarOpen = !navbarOpen;
	}

	const navItems = [
		{
			href: '/',
			label: 'Home',
			icon: Home
		},
		{
			href: '/About',
			label: 'About',
			icon: Info
		},
		{
			href: '/Services',
			label: 'Services',
			icon: Wrench
		},
		{
			href: '/Contact',
			label: 'Contact',
			icon: Phone
		}
	];
</script>

<nav
	class="{transparent && !scrolled
		? 'absolute top-0 z-50 w-full bg-transparent'
		: 'fixed top-0 z-50 w-full border-b border-white/10 bg-[var(--color-surface)]/80 shadow-lg backdrop-blur-xl'} transition-all duration-300"
>
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a href="/" class="group flex items-center">
				<div
					class="relative mr-3 h-12 w-12 overflow-hidden rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-2 shadow-lg transition-transform group-hover:scale-110"
				>
					<Droplets class="h-full w-full text-white" />
				</div>
				<span class="text-2xl font-bold">
					<span class={transparent && !scrolled ? 'text-white' : 'modern-header'}
						>Travis Drilling</span
					>
				</span>
			</a>

			<button
				class="modern-card block px-3 py-2 text-xl leading-none lg:hidden {navbarOpen
					? 'bg-white/20'
					: ''}"
				type="button"
				onclick={toggleNavbar}
				aria-label="Toggle navigation"
			>
				{#if navbarOpen}
					<X class="h-6 w-6 text-white" />
				{:else}
					<Menu class="h-6 w-6 text-white" />
				{/if}
			</button>
		</div>

		<!-- Mobile Menu -->
		<div
			class="mt-4 w-full overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:w-auto lg:items-center lg:overflow-visible {navbarOpen
				? 'max-h-96'
				: 'max-h-0 lg:max-h-none'}"
		>
			<ul class="flex list-none flex-col gap-2 lg:ml-auto lg:flex-row lg:gap-1">
				{#each navItems as item}
					<li>
						<a
							class="group flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-white/10 {page
								.url.pathname === item.href
								? 'bg-white/10 text-[var(--color-accent)]'
								: transparent && !scrolled
									? 'text-white hover:text-[var(--color-accent)]'
									: 'text-[var(--color-text-secondary)] hover:text-white'}"
							href={item.href}
						>
							<item.icon class="h-4 w-4 transition-transform group-hover:scale-110" />
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<div class="mt-4 flex lg:mt-0 lg:ml-6">
				<a href="/Contact" class="modern-button w-full text-center lg:w-auto"> Get a Quote </a>
			</div>
		</div>
	</div>
</nav>

<!-- Add padding to body when navbar is fixed -->
{#if !transparent || scrolled}
	<div class="h-20"></div>
{/if}

<style>
	/* Custom navbar animations */
	nav {
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
