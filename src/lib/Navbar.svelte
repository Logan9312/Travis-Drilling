<script lang="ts">
	import { page } from '$app/state';
	import { House, Info, Menu, Phone, X } from 'lucide-svelte';

	let navbarOpen = $state(false);
	const transparent = $derived(page.url.pathname === '/');

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
			href: '/About',
			label: 'About',
			icon: Info
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
						: 'text-gray-700 hover:text-gray-900'} flex items-center gap-2 text-sm font-bold tracking-wide uppercase transition-colors"
				>
					<item.icon class="h-4 w-4" />
					{item.label}
				</a>
			{/each}
			<a
				href="tel:780-974-3184"
				class="bg-brand text-ink flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-bold tracking-wide transition-colors hover:bg-[#33ccff]"
			>
				<Phone class="h-4 w-4" />
				(780) 974-3184
			</a>
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
							class="flex items-center gap-3 rounded-md px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100"
							onclick={() => (navbarOpen = false)}
						>
							<item.icon class="text-brand-deep h-5 w-5" />
							<span class="font-bold tracking-wide uppercase">{item.label}</span>
						</a>
					{/each}
					<hr class="my-2 border-gray-200" />
					<a
						href="tel:780-974-3184"
						class="bg-brand text-ink flex items-center justify-center gap-2 rounded-md px-4 py-3 font-bold tracking-wide uppercase transition-colors hover:bg-[#33ccff]"
						onclick={() => (navbarOpen = false)}
					>
						<Phone class="h-5 w-5" />
						(780) 974-3184
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
