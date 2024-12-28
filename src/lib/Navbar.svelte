<script lang="ts">
	import { page } from '$app/state';
	import { House, Menu, Phone } from 'lucide-svelte';

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
		: 'relative bg-white shadow-lg'} mb-5 flex flex-wrap items-center justify-between px-2 py-3"
>
	<div class="container mx-auto flex flex-wrap items-center justify-between px-4">
		<div class="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
			<a href="/">
				<img
					src={transparent ? '/img/logo_white.png' : '/img/logo.png'}
					width="100"
					height="100"
					alt="Travis Drilling Logo"
					class="mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed"
				/>
			</a>

			<button
				class="block rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
				type="button"
				onclick={toggleNavbar}
				aria-label="Toggle navigation"
			>
				<Menu fill="currentColor" class="{transparent ? 'text-white' : 'text-gray-800'} h-6 w-6" />
			</button>
		</div>

		<div
			class="flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none {navbarOpen
				? 'block rounded shadow-lg'
				: 'hidden'}"
			id="example-navbar-warning"
		>
			<ul class="mr-auto flex list-none flex-col lg:flex-row">
				{#each navItems as item}
					<li class="flex items-center">
						<a
							class="{transparent
								? 'lg:text-white lg:hover:text-gray-300'
								: 'hover:text-gray-600'} flex items-center px-4 py-4 text-xs font-bold uppercase text-gray-800 lg:py-4"
							href={item.href}
						>
							<item.icon
								class="{transparent && 'lg:text-gray-300'} leading-lg mr-2 text-lg text-gray-500"
							/>
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				<!-- right side navbar items -->
			</ul>
		</div>
	</div>
</nav>
