<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	// import SchemaOrg from '$lib/Schemaorg.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Travis Drilling LTD. | Professional Water Well Services | Alberta</title>
	<meta
		name="description"
		content="Professional water well drilling, servicing, and maintenance. Trusted experts in Alberta with cutting-edge equipment and experienced technicians."
	/>

	<!-- OpenGraph tags -->
	<meta property="og:title" content="Travis Drilling LTD. - Professional Water Well Services" />
	<meta property="og:site_name" content="Travis Drilling LTD." />
	<meta
		property="og:description"
		content="Expert water well drilling and servicing in Alberta. New well installation, maintenance, pump services, and more. Get a free quote today."
	/>
	<meta property="og:url" content="https://www.travisdrilling.ca" />

	<!-- Icons -->
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2563eb" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div
	class="flex min-h-screen flex-col bg-gradient-to-br from-[var(--color-background)] to-[var(--color-surface)]"
>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "LocalBusiness",
			"name": "Travis Drilling LTD",
			"image": "https://www.travisdrilling.ca/img/rig.jpg",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "123 Example Road",
				"addressLocality": "Onoway",
				"addressRegion": "AB",
				"postalCode": "T0E 1V0",
				"addressCountry": "CA"
			},
			"url": "https://www.travisdrilling.ca",
			"telephone": "+1-780-974-3184",
			"priceRange": "$$"
		}
	</script>

	<Navbar />

	<main class="flex grow flex-col justify-center">
		{@render children()}
	</main>

	<Footer />
</div>
