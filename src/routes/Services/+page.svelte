<script lang="ts">
	import { Droplets, Wrench, Shovel, Ruler, Gauge, ArrowRight } from 'lucide-svelte';

	const services = [
		{
			title: 'Well Drilling',
			description:
				'Professional water well drilling for residential, agricultural and commercial properties.',
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
			description:
				'Complete well servicing by qualified technicians to ensure your water system operates at peak performance.',
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
			description:
				'Preventative maintenance to extend the life of your well and ensure clean, reliable water.',
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
			description:
				'Professional well abandonment and decommissioning services for old or unproductive wells.',
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
			description:
				'Professional backhoe services for water line installation, trenching, and more.',
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
		<div class="mb-16 text-center">
			<h1 class="rustic-header mb-4 text-4xl text-[var(--color-earth)] lg:text-5xl">
				Our Services
			</h1>
			<div class="mx-auto mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
			<p class="mx-auto max-w-3xl text-lg">
				Travis Drilling offers comprehensive water well services for residential and agricultural
				properties. From drilling to maintenance, our experienced team handles all aspects of your
				water well needs.
			</p>
		</div>

		<!-- Services Grid -->
		<div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<div class="rustic-card h-full">
					<div class="p-6">
						<div class="mb-4 flex items-center">
							<div class="mr-4 p-3 bg-[var(--color-{service.color})]">
								<service.icon class="h-6 w-6 text-white" />
							</div>
							<h3 class="rustic-header text-xl">{service.title}</h3>
						</div>
						<p class="mb-4 text-[var(--color-earth)]">{service.description}</p>
						<ul class="mb-4 space-y-2">
							{#each service.features as feature}
								<li class="flex items-start">
									<ArrowRight
										class="h-4 w-4 text-[var(--color-{service.color})] mt-1 mr-2 flex-shrink-0"
									/>
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
			<h2 class="rustic-header mb-4 text-center text-3xl text-[var(--color-earth)]">Our Process</h2>
			<div class="mx-auto mb-10 h-1 w-20 bg-[var(--color-barn-red)]"></div>

			<div class="relative">
				<!-- Process timeline line -->
				<div
					class="absolute top-0 bottom-0 left-1/2 hidden w-1 -translate-x-1/2 transform bg-[var(--color-hay)] md:block"
				></div>

				<div class="grid grid-cols-1 gap-12">
					<!-- Step 1 -->
					<div class="relative">
						<div
							class="rustic-header z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-[var(--color-barn-red)] font-bold text-white md:absolute md:top-0 md:left-1/2 md:mx-0 md:mb-0 md:-translate-x-1/2 md:transform"
						>
							1
						</div>
						<div class="md:flex">
							<div class="hidden text-right md:block md:w-1/2 md:pr-16"></div>
							<div class="rustic-card p-6 md:w-1/2 md:pl-16">
								<h3 class="rustic-header mb-2 text-xl">Initial Consultation</h3>
								<p>
									We begin with a detailed consultation to understand your specific needs and assess
									your property's requirements.
								</p>
							</div>
						</div>
					</div>

					<!-- Step 2 -->
					<div class="relative">
						<div
							class="rustic-header z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-[var(--color-rustic-brown)] font-bold text-white md:absolute md:top-0 md:left-1/2 md:mx-0 md:mb-0 md:-translate-x-1/2 md:transform"
						>
							2
						</div>
						<div class="md:flex">
							<div class="rustic-card p-6 text-right md:w-1/2 md:pr-16">
								<h3 class="rustic-header mb-2 text-xl">Site Assessment</h3>
								<p>
									Our team conducts a thorough site evaluation to determine the optimal location for
									your well or identify issues with existing wells.
								</p>
							</div>
							<div class="hidden md:block md:w-1/2 md:pl-16"></div>
						</div>
					</div>

					<!-- Step 3 -->
					<div class="relative">
						<div
							class="rustic-header z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-[var(--color-forest)] font-bold text-white md:absolute md:top-0 md:left-1/2 md:mx-0 md:mb-0 md:-translate-x-1/2 md:transform"
						>
							3
						</div>
						<div class="md:flex">
							<div class="hidden text-right md:block md:w-1/2 md:pr-16"></div>
							<div class="rustic-card p-6 md:w-1/2 md:pl-16">
								<h3 class="rustic-header mb-2 text-xl">Service Execution</h3>
								<p>
									We complete the required work with professional expertise, using quality equipment
									and materials to ensure lasting results.
								</p>
							</div>
						</div>
					</div>

					<!-- Step 4 -->
					<div class="relative">
						<div
							class="rustic-header z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-[var(--color-hay)] font-bold text-white md:absolute md:top-0 md:left-1/2 md:mx-0 md:mb-0 md:-translate-x-1/2 md:transform"
						>
							4
						</div>
						<div class="md:flex">
							<div class="rustic-card p-6 text-right md:w-1/2 md:pr-16">
								<h3 class="rustic-header mb-2 text-xl">Testing & Verification</h3>
								<p>
									Upon completion, we thoroughly test all work to ensure everything functions
									properly and meets our high standards of quality.
								</p>
							</div>
							<div class="hidden md:block md:w-1/2 md:pl-16"></div>
						</div>
					</div>

					<!-- Step 5 -->
					<div class="relative">
						<div
							class="rustic-header z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-[var(--color-barn-red)] font-bold text-white md:absolute md:top-0 md:left-1/2 md:mx-0 md:mb-0 md:-translate-x-1/2 md:transform"
						>
							5
						</div>
						<div class="md:flex">
							<div class="hidden text-right md:block md:w-1/2 md:pr-16"></div>
							<div class="rustic-card p-6 md:w-1/2 md:pl-16">
								<h3 class="rustic-header mb-2 text-xl">Ongoing Support</h3>
								<p>
									We provide continued support and maintenance recommendations to ensure your water
									system remains in optimal condition for years to come.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Service Area -->
		<div class="rustic-card mt-20 p-8">
			<h2 class="rustic-header mb-4 text-center text-3xl">Service Area</h2>
			<p class="mb-6 text-center">
				Travis Drilling proudly serves Onoway and surrounding areas throughout Alberta. Contact us
				to confirm service availability in your location.
			</p>
			<div class="text-center">
				<a href="/Contact" class="rustic-button inline-block">Request a Quote</a>
			</div>
		</div>
	</div>
</div>
