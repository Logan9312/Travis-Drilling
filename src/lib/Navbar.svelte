<script lang="ts">
	import { page } from '$app/state';
	import { House, Menu, Phone, HardHat, Droplets } from 'lucide-svelte';

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
			label: 'Ranch',
			icon: House
		},
		{
			href: '/About',
			label: 'Our Story',
			icon: HardHat
		},
		{
			href: '/Contact',
			label: 'Holler at Us',
			icon: Phone
		}
	];
</script>

<nav
	class="{transparent
		? 'absolute top-0 z-50 w-full'
		: 'relative bg-gradient-to-b from-[#8B4513] to-[#654321] shadow-xl'} mb-5 flex flex-wrap items-center justify-between px-2 py-3 transition-all duration-300"
>
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a href="/" class="flex items-center">
				<Droplets class="mr-2 h-8 w-8 {transparent ? 'text-white' : 'text-[#F5DEB3]'}" />
				<span
					class="font-western text-3xl tracking-wide {transparent
						? 'text-shadow-western text-white'
						: 'text-[#F5DEB3]'}"
				>
					TRAVIS DRILLING
				</span>
			</a>

			<button
				class="block rounded-sm border-2 {transparent
					? 'border-white'
					: 'border-[#D2B48C]'} bg-transparent px-3 py-1 text-xl leading-none outline-hidden focus:outline-hidden lg:hidden"
				type="button"
				onclick={toggleNavbar}
				aria-label="Toggle navigation"
			>
				<Menu fill="currentColor" class="{transparent ? 'text-white' : 'text-[#F5DEB3]'} h-6 w-6" />
			</button>
		</div>

		<div
			class="grow items-center {navbarOpen
				? 'block rounded-sm bg-[#654321] shadow-lg'
				: 'hidden'} lg:flex lg:bg-transparent lg:shadow-none"
			id="example-navbar-warning"
		>
			<ul class="mr-auto flex list-none flex-col lg:flex-row">
				{#each navItems as item}
					<li class="flex items-center">
						<a
							class="{transparent
								? 'lg:text-white lg:hover:text-[#F5DEB3]'
								: 'hover:text-[#FFF8DC]'} font-ranch flex items-center px-4 py-4 text-sm font-semibold tracking-wider text-[#F5DEB3] uppercase transition-colors duration-200 lg:py-4"
							href={item.href}
						>
							<item.icon
								class="{transparent && 'lg:text-white'} leading-lg mr-2 text-lg {!transparent &&
									'text-[#D2B48C]'}"
							/>
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				<li class="flex items-center">
					<a
						href="/Contact"
						class="mx-4 my-2 rounded-sm border-2 {transparent
							? 'border-white bg-transparent text-white hover:bg-white hover:text-[#8B4513]'
							: 'border-[#D2B48C] bg-[#8B0000] text-[#F5DEB3] hover:bg-[#B7410E]'} font-ranch px-4 py-2 text-sm font-bold tracking-wider uppercase transition-all duration-200"
					>
						Get a Quote
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
