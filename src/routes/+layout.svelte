<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	// import SchemaOrg from '$lib/Schemaorg.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Travis Drilling LTD. | Water Well Drilling & Service | Onoway, Alberta</title>
	<meta
		name="description"
		content="Family-owned water well drilling in Alberta since way back when. We drill, service, repair, test wells, install pumps, and provide backhoe services. Honest work, fair prices."
	/>
	<meta
		name="keywords"
		content="water well drilling, well service, well repair, pump installation, backhoe service, Onoway, Alberta, Travis Drilling"
	/>
	<meta name="author" content="Travis Drilling LTD." />

	<!-- OpenGraph tags -->
	<meta property="og:title" content="Travis Drilling LTD. - Alberta's Trusted Water Well Service" />
	<meta property="og:site_name" content="Travis Drilling LTD." />
	<meta
		property="og:description"
		content="Three generations of water well excellence. Family-owned drilling, servicing, and repair throughout Central Alberta. Get your free quote today!"
	/>
	<meta property="og:url" content="https://www.travisdrilling.ca" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.travisdrilling.ca/img/rig.jpg" />

	<!-- Twitter Card tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Travis Drilling LTD. - Water Well Services" />
	<meta
		name="twitter:description"
		content="Family-owned water well drilling in Alberta. Honest work, fair prices."
	/>
	<meta name="twitter:image" content="https://www.travisdrilling.ca/img/rig.jpg" />

	<!-- Theme color for mobile browsers -->
	<meta name="theme-color" content="#8B4513" />

	<!-- Icons -->
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8B4513" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-[#FFF8DC]">
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
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 53.7017,
				"longitude": -114.1982
			},
			"url": "https://www.travisdrilling.ca",
			"telephone": "+1-780-974-3184",
			"priceRange": "$$",
			"openingHours": "Mo-Fr 07:00-18:00 Sa 08:00-16:00",
			"sameAs": ["https://github.com/Logan9312/Travis-Drilling"]
		}
	</script>

	<Navbar />

	<main class="flex grow flex-col justify-center">
		{@render children()}
	</main>

	<Footer />
</div>
