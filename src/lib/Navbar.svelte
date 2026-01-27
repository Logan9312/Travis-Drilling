<script lang="ts">
	import { page } from '$app/state';
	import { House, Menu, Phone, X } from 'lucide-svelte';

	let navbarOpen = $state(false);
	let { transparent = false } = $props();

	$effect(() => {
		transparent = page.url.pathname === '/';
	});

	function toggleNavbar() {
		navbarOpen = !navbarOpen;
	}

	const navItems = [
		{
			href: '/',
			label: 'Home',
			icon: House
		},
		{
			href: '/Contact',
			label: 'Contact',
			icon: Phone
		}
	];
</script>

<nav
	class="{transparent
		? 'absolute top-0 z-50 w-full'
		: 'relative bg-white shadow-md'} transition-all duration-300"
>
	<div class="container mx-auto flex items-center justify-between px-6 py-3">
		<!-- Logo -->
		<a href="/" class="flex items-center">
			<img
				src={transparent ? '/img/logo_white.png' : '/img/logo.png'}
				width="80"
				height="80"
				alt="Travis Drilling Logo"
				class="transition-transform duration-300 hover:scale-105"
			/>
		</a>

		<!-- Desktop Navigation -->
		<div class="hidden items-center gap-6 lg:flex">
			{#each navItems as item}
				<a
					href={item.href}
					class="{transparent
						? 'text-white/90 hover:text-white'
						: 'text-gray-700 hover:text-gray-900'} flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors"
				>
					<item.icon class="h-4 w-4" />
					{item.label}
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<button
			class="{transparent ? 'text-white' : 'text-gray-800'} p-2 lg:hidden"
			type="button"
			onclick={toggleNavbar}
			aria-label="Toggle navigation"
		>
			{#if navbarOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</button>
	</div>

	<!-- Mobile Navigation -->
	{#if navbarOpen}
		<div class="border-t border-gray-200 bg-white lg:hidden">
			<div class="container mx-auto px-6 py-4">
				<div class="flex flex-col gap-2">
					{#each navItems as item}
						<a
							href={item.href}
							class="flex items-center gap-3 px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
							onclick={() => (navbarOpen = false)}
						>
							<item.icon class="h-5 w-5 text-[#00bfff]" />
							<span class="font-bold uppercase tracking-wide">{item.label}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>
