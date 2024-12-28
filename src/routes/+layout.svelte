<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	// import SchemaOrg from '$lib/Schemaorg.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Travis Drilling LTD. | Water Well Drilling and Service | Alberta</title>
	<meta
		name="description"
		content="Locally owned water well drilling, servicing, repairing, testing, pump installation, abandonment and shocking."
	/>

	<!-- OpenGraph tags -->
	<meta property="og:title" content="Travis Drilling LTD." />
	<meta property="og:site_name" content="Travis Drilling LTD." />
	<meta
		property="og:description"
		content="Locally owned water well drilling and servicing. We handle servicing, repairing, and testing wells. We can drill new wells and install pumps or abandon or shock old wells. Travis Drilling is located in Onoway, Alberta, Canada."
	/>
	<meta property="og:url" content="https://www.travisdrilling.ca" />

	<!-- Icons -->
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="flex min-h-screen flex-col">
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

	<main class="flex flex-grow flex-col justify-center">
		{@render children()}
	</main>

	<Footer />
</div>
