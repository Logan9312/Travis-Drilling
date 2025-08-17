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

<nav>
	<div>
		<div>
			<a href="/">
				<img
					src={transparent ? '/img/logo_white.png' : '/img/logo.png'}
					width="100"
					height="100"
					alt="Travis Drilling Logo"
					/>
			</a>

			<button
				type="button"
				onclick={toggleNavbar}
				aria-label="Toggle navigation"
			>
				<Menu fill="currentColor" />
			</button>
		</div>

		<div
			style="{navbarOpen ? 'display: block;' : 'display: none;'}"
			id="example-navbar-warning"
		>
			<ul>
				{#each navItems as item}
					<li>
						<a
							href={item.href}
						>
							<item.icon />
							<span>{item.label}</span>
						</a>
					</li>
				{/each}
			</ul>

			<ul>
				<!-- right side navbar items -->
			</ul>
		</div>
	</div>
</nav>
