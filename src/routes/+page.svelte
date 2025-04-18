<script lang="ts">
	import { Droplets, Mail, Phone, Shovel, Wrench, Tractor, Shield } from 'lucide-svelte';

	const profiles = [
		{ name: 'Jason Travis', imgSrc: '/img/blank.png', title: 'Owner & Lead Driller' },
		{ name: 'Christy Travis', imgSrc: '/img/blank.png', title: 'Office Manager' },
		{ name: 'Hayden Borle', imgSrc: '/img/blank.png', title: 'Field Technician' }
	];

	const services = [
		{
			title: 'Well Drilling & Service',
			description:
				'Professional water well drilling for agricultural or residential needs, with journeyman service and repair.',
			icon: Wrench,
			color: 'barn-red'
		},
		{
			title: 'Well Maintenance',
			description:
				'Well abandonment, decommissioning, maintenance, and shocking services to keep your water source healthy and productive.',
			icon: Droplets,
			color: 'forest'
		},
		{
			title: 'Backhoe Services',
			description:
				'Backhoe service for trenching, installation and repair of underground water lines, and more.',
			icon: Shovel,
			color: 'rustic-brown'
		}
	];

	const values = [
		{
			title: 'Local Experience',
			description: 'Deep roots in the community with years of trusted service.',
			icon: Tractor
		},
		{
			title: 'Quality Guarantee',
			description: 'We stand behind our work with professional results every time.',
			icon: Shield
		}
	];
</script>

<div>
	<!-- Hero Section -->
	<div
		class="relative flex min-h-[60vh] content-center items-center justify-center md:min-h-[80vh]"
	>
		<div
			class="absolute top-0 h-full w-full bg-[url('/img/rig_cropped.jpg')] bg-cover bg-bottom bg-no-repeat lg:bg-[url('/img/rig.jpg')]"
		>
			<span id="overlay" class="absolute h-full w-full bg-[var(--color-earth)] opacity-60"></span>
		</div>
		<div class="relative container mx-auto my-6 py-6">
			<div class="flex flex-wrap items-center">
				<div class="mr-auto ml-auto w-full px-4 text-center lg:w-7/12">
					<h1 class="rustic-header mb-6 text-4xl text-[var(--color-wheat)] lg:text-6xl">
						Travis Drilling
					</h1>
					<div class="mx-auto mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
					<p class="mt-4 text-2xl font-light text-[var(--color-hay)]">
						Water Well Drilling and Service
					</p>
					<div class="mt-10">
						<a href="/Contact" class="rustic-button mr-4 inline-block"> Get a Quote </a>
						<a
							href="/Services"
							class="inline-block border-2 border-[var(--color-wheat)] px-4 py-2 font-bold text-[var(--color-wheat)] transition-colors duration-200 hover:bg-[var(--color-wheat)] hover:text-[var(--color-earth)]"
						>
							Our Services
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Wood texture overlay -->
		<div
			class="absolute right-0 bottom-0 left-0 h-16 border-t-4 border-[var(--color-rustic-brown)] bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-90"
		></div>
	</div>

	<!-- Services Section -->
	<section class="-mt-12 pb-20 md:-mt-24">
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap items-stretch gap-y-6">
				{#each services as service, i}
					<div class="w-full px-4 md:w-4/12">
						<div class="rustic-card h-full px-6 py-5">
							<div class="flex flex-auto flex-col items-center justify-center">
								<div
									class="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-none bg-[var(--color-{service.color})] p-3 text-center text-white"
								>
									<service.icon class="h-8 w-8" />
								</div>
								<div class="text-center">
									<h3 class="rustic-header mb-3 text-2xl text-[var(--color-earth)]">
										{service.title}
									</h3>
									<p class="mb-4 text-[var(--color-earth)]">
										{service.description}
									</p>
									<a
										href="/Services"
										class="mt-2 inline-block font-bold text-[var(--color-barn-red)] hover:underline"
										>Learn More</a
									>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-24 flex flex-wrap items-center">
				<div class="w-full px-4 lg:w-6/12">
					<div class="relative">
						<!-- Decorative border element -->
						<div class="absolute top-0 bottom-0 -left-4 w-1 bg-[var(--color-barn-red)]"></div>
						<h2 class="rustic-header mb-4 text-4xl text-[var(--color-earth)]">
							Family-Owned & Trusted
						</h2>
						<p class="mb-6 text-lg leading-relaxed">
							Travis Drilling is locally owned and operated in the Onoway area. We are dedicated to
							providing professional water well services with the reliability and personal touch
							that only a family business can deliver.
						</p>

						<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
							{#each values as value}
								<div class="flex items-start">
									<div class="mr-4 rounded-none bg-[var(--color-hay)] p-3">
										<value.icon class="h-6 w-6 text-[var(--color-earth)]" />
									</div>
									<div>
										<h3 class="mb-1 text-xl font-bold">{value.title}</h3>
										<p>{value.description}</p>
									</div>
								</div>
							{/each}
						</div>

						<div class="mt-8">
							<a href="/About" class="rustic-button inline-block">About Our Company</a>
						</div>
					</div>
				</div>

				<div class="mt-12 hidden w-full px-4 lg:mt-0 lg:block lg:w-6/12">
					<div class="relative mx-auto" style="max-width: 500px;">
						<!-- Main image with rustic frame effect -->
						<div
							class="relative border-8 border-[#F8F4E3] shadow-xl"
							style="transform: rotate(2deg);"
						>
							<img src="/img/rig_original.jpg" alt="Drilling Rig" class="w-full object-cover" />
						</div>
						<!-- Decorative element -->
						<div
							class="absolute -bottom-6 -left-6 -z-10 h-24 w-24 bg-[var(--color-barn-red)]"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="relative overflow-hidden bg-[var(--color-earth)] py-16">
		<!-- Decorative wood texture overlay -->
		<div
			class="absolute top-0 right-0 left-0 h-8 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-70"
		></div>
		<div
			class="absolute right-0 bottom-0 left-0 h-8 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-70"
		></div>

		<div class="container mx-auto px-4 py-8">
			<div class="flex flex-wrap justify-center text-center">
				<div class="w-full px-4 lg:w-8/12">
					<h2 class="rustic-header mb-6 text-4xl text-[var(--color-wheat)]">
						Ready to Start Your Project?
					</h2>
					<p class="mx-auto mb-8 max-w-3xl text-lg text-[var(--color-hay)]">
						Contact us today to discuss your water well needs or to get an estimate for our
						services.
					</p>
					<div
						class="mx-auto flex flex-col justify-center gap-4 md:flex-row"
						style="max-width: 500px"
					>
						<a href="tel:780-974-3184" class="rustic-button flex items-center justify-center">
							<Phone class="mr-2 h-5 w-5" />
							(780) 974-3184
						</a>
						<a
							href="mailto:contact@travisdrilling.ca"
							class="flex items-center justify-center border-2 border-[var(--color-hay)] bg-[var(--color-wheat)] px-4 py-2 font-bold text-[var(--color-earth)] transition-colors duration-200 hover:bg-[var(--color-hay)]"
						>
							<Mail class="mr-2 h-5 w-5" />
							Email Us
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="py-20">
		<div class="container mx-auto px-4">
			<div class="mb-16 flex flex-wrap justify-center text-center">
				<div class="w-full px-4 lg:w-6/12">
					<h2 class="rustic-header mb-4 text-4xl text-[var(--color-earth)]">Meet Our Team</h2>
					<div class="mx-auto mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
					<p class="text-lg">
						The people behind Travis Drilling are experienced professionals dedicated to quality
						service.
					</p>
				</div>
			</div>
			<div class="flex flex-wrap justify-center">
				{#each profiles as profile}
					<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
						<div class="px-6">
							<div class="rustic-card mb-3 inline-block p-2">
								<img alt={profile.name} src={profile.imgSrc} class="w-40 max-w-full" />
							</div>
							<div class="pt-2 text-center">
								<h3 class="rustic-header mb-1 text-xl">{profile.name}</h3>
								<p class="font-medium text-[var(--color-barn-red)]">{profile.title}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
