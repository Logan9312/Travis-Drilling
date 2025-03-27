<script lang="ts">
	import { Droplets, Wrench, Shovel, Ruler, Gauge, ArrowRight } from 'lucide-svelte';

	const services = [
		{
			title: 'Well Drilling',
			description: 'Professional water well drilling for residential, agricultural and commercial properties.',
			icon: Wrench,
			color: 'barn-red',
			features: [
				'New well installation',
				'Expert site selection',
				'Comprehensive drilling services',
				'Quality materials and construction'
			]
		},
		{
			title: 'Well Servicing & Testing',
			description: 'Complete well servicing by qualified technicians to ensure your water system operates at peak performance.',
			icon: Gauge,
			color: 'hay',
			features: [
				'Pump repairs and replacement',
				'Flow testing and diagnostics',
				'Water quality testing',
				'System troubleshooting'
			]
		},
		{
			title: 'Well Maintenance',
			description: 'Preventative maintenance to extend the life of your well and ensure clean, reliable water.',
			icon: Droplets,
			color: 'forest',
			features: [
				'Regular inspection services',
				'Preventative treatments',
				'System optimization',
				'Seasonal maintenance programs'
			]
		},
		{
			title: 'Abandonment & Shocking',
			description: 'Professional well abandonment and decommissioning services for old or unproductive wells.',
			icon: Droplets,
			color: 'rustic-brown',
			features: [
				'Complete well decommissioning',
				'Environmental compliance',
				'Well shocking treatments',
				'Documentation and reporting'
			]
		},
		{
			title: 'Backhoe Services',
			description: 'Professional backhoe services for water line installation, trenching, and more.',
			icon: Shovel,
			color: 'barn-red',
			features: [
				'Water line trenching',
				'Underground line installation',
				'Site preparation',
				'Excavation services'
			]
		},
		{
			title: 'Site Assessment',
			description: 'Expert site assessment to determine the best location for your new water well.',
			icon: Ruler,
			color: 'forest',
			features: [
				'Property evaluation',
				'Water table assessment',
				'Environmental considerations',
				'Consultation and recommendations'
			]
		}
	];
</script>

<div class="pt-24 pb-16">
	<div class="container mx-auto px-4">
		<!-- Services Header -->
		<div class="text-center mb-16">
			<h1 class="rustic-header text-4xl lg:text-5xl mb-4 text-[var(--color-earth)]">Our Services</h1>
			<div class="h-1 w-20 bg-[var(--color-barn-red)] mx-auto mb-6"></div>
			<p class="max-w-3xl mx-auto text-lg">
				Travis Drilling offers comprehensive water well services for residential and agricultural properties. 
				From drilling to maintenance, our experienced team handles all aspects of your water well needs.
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each services as service}
				<div class="rustic-card h-full">
					<div class="p-6">
						<div class="flex items-center mb-4">
							<div class="mr-4 p-3 bg-[var(--color-{service.color})]">
								<service.icon class="h-6 w-6 text-white" />
							</div>
							<h3 class="rustic-header text-xl">{service.title}</h3>
						</div>
						<p class="mb-4 text-[var(--color-earth)]">{service.description}</p>
						<ul class="space-y-2 mb-4">
							{#each service.features as feature}
								<li class="flex items-start">
									<ArrowRight class="h-4 w-4 text-[var(--color-{service.color})] mr-2 mt-1 flex-shrink-0" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>

		<!-- Service Process -->
		<div class="mt-24 mb-20">
			<h2 class="rustic-header text-3xl text-center mb-4 text-[var(--color-earth)]">Our Process</h2>
			<div class="h-1 w-20 bg-[var(--color-barn-red)] mx-auto mb-10"></div>

			<div class="relative">
				<!-- Process timeline line -->
				<div class="absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--color-hay)] transform -translate-x-1/2 hidden md:block"></div>

				<div class="grid grid-cols-1 gap-12">
					<!-- Step 1 -->
					<div class="relative">
						<div class="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-none bg-[var(--color-barn-red)] text-white flex items-center justify-center font-bold rustic-header mx-auto md:mx-0 mb-4 md:mb-0">1</div>
						<div class="md:flex">
							<div class="md:w-1/2 md:pr-16 text-right hidden md:block"></div>
							<div class="md:w-1/2 md:pl-16 rustic-card p-6">
								<h3 class="rustic-header text-xl mb-2">Initial Consultation</h3>
								<p>We begin with a detailed consultation to understand your specific needs and assess your property's requirements.</p>
							</div>
						</div>
					</div>

					<!-- Step 2 -->
					<div class="relative">
						<div class="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-none bg-[var(--color-rustic-brown)] text-white flex items-center justify-center font-bold rustic-header mx-auto md:mx-0 mb-4 md:mb-0">2</div>
						<div class="md:flex">
							<div class="md:w-1/2 md:pr-16 text-right rustic-card p-6">
								<h3 class="rustic-header text-xl mb-2">Site Assessment</h3>
								<p>Our team conducts a thorough site evaluation to determine the optimal location for your well or identify issues with existing wells.</p>
							</div>
							<div class="md:w-1/2 md:pl-16 hidden md:block"></div>
						</div>
					</div>

					<!-- Step 3 -->
					<div class="relative">
						<div class="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-none bg-[var(--color-forest)] text-white flex items-center justify-center font-bold rustic-header mx-auto md:mx-0 mb-4 md:mb-0">3</div>
						<div class="md:flex">
							<div class="md:w-1/2 md:pr-16 text-right hidden md:block"></div>
							<div class="md:w-1/2 md:pl-16 rustic-card p-6">
								<h3 class="rustic-header text-xl mb-2">Service Execution</h3>
								<p>We complete the required work with professional expertise, using quality equipment and materials to ensure lasting results.</p>
							</div>
						</div>
					</div>

					<!-- Step 4 -->
					<div class="relative">
						<div class="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-none bg-[var(--color-hay)] text-white flex items-center justify-center font-bold rustic-header mx-auto md:mx-0 mb-4 md:mb-0">4</div>
						<div class="md:flex">
							<div class="md:w-1/2 md:pr-16 text-right rustic-card p-6">
								<h3 class="rustic-header text-xl mb-2">Testing & Verification</h3>
								<p>Upon completion, we thoroughly test all work to ensure everything functions properly and meets our high standards of quality.</p>
							</div>
							<div class="md:w-1/2 md:pl-16 hidden md:block"></div>
						</div>
					</div>

					<!-- Step 5 -->
					<div class="relative">
						<div class="md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 w-12 h-12 rounded-none bg-[var(--color-barn-red)] text-white flex items-center justify-center font-bold rustic-header mx-auto md:mx-0 mb-4 md:mb-0">5</div>
						<div class="md:flex">
							<div class="md:w-1/2 md:pr-16 text-right hidden md:block"></div>
							<div class="md:w-1/2 md:pl-16 rustic-card p-6">
								<h3 class="rustic-header text-xl mb-2">Ongoing Support</h3>
								<p>We provide continued support and maintenance recommendations to ensure your water system remains in optimal condition for years to come.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Service Area -->
		<div class="mt-20 rustic-card p-8">
			<h2 class="rustic-header text-3xl text-center mb-4">Service Area</h2>
			<p class="text-center mb-6">
				Travis Drilling proudly serves Onoway and surrounding areas throughout Alberta. Contact us to confirm service availability in your location.
			</p>
			<div class="text-center">
				<a href="/Contact" class="rustic-button inline-block">Request a Quote</a>
			</div>
		</div>
	</div>
</div>