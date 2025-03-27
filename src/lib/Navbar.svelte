<script lang="ts">
	import { page } from '$app/state';
	import { Home, Menu, Phone, Info, Wrench } from 'lucide-svelte';

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
	class="{transparent
		? 'absolute top-0 z-50 w-full'
		: 'relative bg-[var(--color-earth)] shadow-lg'} mb-0 flex flex-wrap items-center justify-between border-b-4 border-[var(--color-barn-red)] px-2 py-3"
>
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a href="/" class="flex items-center">
				<img
					src={transparent ? '/img/logo_white.png' : '/img/logo_white.png'}
					width="60"
					height="60"
					alt="Travis Drilling Logo"
					class="mr-3 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed"
				/>
				<span class="rustic-header text-2xl text-white">Travis Drilling</span>
			</a>

			<button
				class="block rounded-none border-2 border-[var(--color-wheat)] bg-transparent px-3 py-1 text-xl leading-none outline-hidden focus:outline-hidden lg:hidden"
				type="button"
				onclick={toggleNavbar}
				aria-label="Toggle navigation"
			>
				<Menu fill="currentColor" class="text-white h-6 w-6" />
			</button>
		</div>

		<div
			class="grow items-center bg-[var(--color-earth)] lg:flex lg:bg-transparent lg:shadow-none {navbarOpen
				? 'block rounded-none border-2 border-[var(--color-wheat)] shadow-lg'
				: 'hidden'}"
			id="example-navbar-warning"
		>
			<ul class="mr-auto flex list-none flex-col lg:flex-row">
				{#each navItems as item}
					<li class="flex items-center border-b border-[var(--color-wheat)] lg:border-b-0">
						<a
							class="flex items-center px-4 py-4 text-sm font-bold text-white hover:bg-[var(--color-rustic-brown)] hover:text-[var(--color-wheat)] transition-colors duration-200 w-full lg:py-4"
							href={item.href}
						>
							<item.icon
								class="leading-lg mr-2 text-lg text-[var(--color-hay)]"
							/>
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<div class="flex lg:ml-auto">
				<a href="/Contact" class="hidden lg:block rustic-button">
					Get a Quote
				</a>
			</div>
		</div>
	</div>
</nav>
