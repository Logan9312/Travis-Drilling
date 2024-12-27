<script lang="ts">
	import { page } from '$app/state';

	let navbarOpen = $state(false);
	let { transparent = false } = $props();

	$effect(() => {
		transparent = page.url.pathname === '/';
	});

	function toggleNavbar() {
		navbarOpen = !navbarOpen;
	}
</script>

<p>Currently at {page.url.pathname} {transparent}</p>
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

			<a
				class="{transparent
					? 'text-white'
					: 'text-gray-800'} title-lg mr-4 inline-block whitespace-nowrap py-2 font-bold uppercase leading-relaxed"
				href="/"
				aria-label="Home"
			></a>

			<button
				class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
				type="button"
				onclick={toggleNavbar}
				aria-label="Toggle navigation"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="{transparent ? 'text-white' : 'text-gray-800'} h-6 w-6"
				>
					<path
						fill-rule="evenodd"
						d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>

		<div
			class="flex-grow items-center bg-white lg:flex lg:bg-transparent lg:shadow-none {navbarOpen
				? 'block rounded shadow-lg'
				: 'hidden'}"
			id="example-navbar-warning"
		>
			<ul class="mr-auto flex list-none flex-col lg:flex-row">
				<li class="flex items-center">
					<a
						class="{transparent
							? 'text-gray-800 lg:text-white lg:hover:text-gray-300'
							: 'text-gray-800 hover:text-gray-600'} flex items-center px-4 py-4 text-xs font-bold uppercase lg:py-4"
						href="/"
					>
						<i
							class="{transparent
								? 'text-gray-500 lg:text-gray-300'
								: 'text-gray-500'} fas fa-house leading-lg mr-2 text-lg"
						></i>
						Home
					</a>
				</li>

				<li class="flex items-center">
					<a
						class="{transparent
							? 'text-gray-800 lg:text-white lg:hover:text-gray-300'
							: 'text-gray-800 hover:text-gray-600'} flex items-center px-4 py-4 text-xs font-bold uppercase lg:py-2"
						href="/Contact"
					>
						<i
							class="{transparent
								? 'text-gray-500 lg:text-gray-300'
								: 'text-gray-500'} far fa-address-card leading-lg text-lg"
						></i>
						<span class="ml-2 inline-block">Contact</span>
					</a>
				</li>
			</ul>

			<ul class="flex list-none flex-col lg:ml-auto lg:flex-row">
				<!-- right side navbar items -->
			</ul>
		</div>
	</div>
</nav>
