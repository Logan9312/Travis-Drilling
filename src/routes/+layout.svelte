<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import '../app.css';
	let { children } = $props();

	const canonical = $derived(`https://www.travisdrilling.ca${page.url.pathname}`);
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
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://www.travisdrilling.ca/android-chrome-512x512.png" />

	<!-- Twitter (small summary card, logo only) -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Travis Drilling LTD." />
	<meta
		name="twitter:description"
		content="Locally owned water well drilling and service in Onoway, Alberta and the surrounding area."
	/>
	<meta name="twitter:image" content="https://www.travisdrilling.ca/android-chrome-512x512.png" />

	<!-- Canonical -->
	<link rel="canonical" href={canonical} />

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
			"@id": "https://www.travisdrilling.ca/#business",
			"name": "Travis Drilling LTD",
			"description": "Locally owned and operated water well drilling and service for farms and homes around Onoway, Alberta.",
			"image": "https://www.travisdrilling.ca/img/rig.jpg",
			"url": "https://www.travisdrilling.ca",
			"telephone": "+1-780-974-3184",
			"email": "contact@travisdrilling.ca",
			"priceRange": "$$",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Onoway",
				"addressRegion": "AB",
				"addressCountry": "CA"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": 53.7008,
				"longitude": -114.1953
			},
			"areaServed": [
				{ "@type": "City", "name": "Onoway" },
				{ "@type": "City", "name": "Alberta Beach" },
				{ "@type": "City", "name": "Sangudo" },
				{ "@type": "City", "name": "Mayerthorpe" },
				{ "@type": "City", "name": "Gunn" },
				{ "@type": "City", "name": "Darwell" },
				{ "@type": "City", "name": "Glenevis" },
				{ "@type": "City", "name": "Cherhill" },
				{ "@type": "City", "name": "Rochfort Bridge" },
				{ "@type": "City", "name": "Lac Ste. Anne" },
				{ "@type": "City", "name": "Stony Plain" },
				{ "@type": "City", "name": "Spruce Grove" },
				{ "@type": "City", "name": "Morinville" },
				{ "@type": "City", "name": "Westlock" },
				{ "@type": "City", "name": "Barrhead" }
			],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Water well services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": { "@type": "Service", "name": "Water well drilling" }
					},
					{
						"@type": "Offer",
						"itemOffered": { "@type": "Service", "name": "Well servicing and repair" }
					},
					{
						"@type": "Offer",
						"itemOffered": { "@type": "Service", "name": "Pump installation and repair" }
					},
					{
						"@type": "Offer",
						"itemOffered": { "@type": "Service", "name": "Water and well testing" }
					},
					{
						"@type": "Offer",
						"itemOffered": { "@type": "Service", "name": "Well abandonment and shocking" }
					},
					{
						"@type": "Offer",
						"itemOffered": { "@type": "Service", "name": "Backhoe and trenching" }
					}
				]
			}
		}
	</script>

	<Navbar />

	<main class="flex grow flex-col">
		{@render children()}
	</main>

	<Footer />
</div>
