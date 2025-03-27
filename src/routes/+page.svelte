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
			description: 'Professional water well drilling for agricultural or residential needs, with journeyman service and repair.',
			icon: Wrench,
			color: 'barn-red'
		},
		{
			title: 'Well Maintenance',
			description: 'Well abandonment, decommissioning, maintenance, and shocking services to keep your water source healthy and productive.',
			icon: Droplets,
			color: 'forest'
		},
		{
			title: 'Backhoe Services',
			description: 'Expert backhoe service for trenching, installation and repair of underground water lines, and more.',
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
		<div class="container relative mx-auto my-6 py-6">
			<div class="flex flex-wrap items-center">
				<div class="ml-auto mr-auto w-full px-4 text-center lg:w-7/12">
					<h1 class="rustic-header mb-6 text-4xl text-[var(--color-wheat)] lg:text-6xl">Travis Drilling</h1>
					<div class="mx-auto h-1 w-20 bg-[var(--color-barn-red)] mb-6"></div>
					<p class="mt-4 text-2xl text-[var(--color-hay)] font-light">Water Well Drilling and Service</p>
					<div class="mt-10">
						<a href="/Contact" class="rustic-button mr-4 inline-block">
							Get a Quote
						</a>
						<a href="/Services" class="border-2 border-[var(--color-wheat)] text-[var(--color-wheat)] hover:bg-[var(--color-wheat)] hover:text-[var(--color-earth)] font-bold py-2 px-4 inline-block transition-colors duration-200">
							Our Services
						</a>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Wood texture overlay -->
		<div class="absolute bottom-0 left-0 right-0 h-16 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-90 border-t-4 border-[var(--color-rustic-brown)]"></div>
	</div>

	<!-- Services Section -->
	<section class="-mt-12 pb-20 md:-mt-24">
		<div class="container mx-auto px-4">
			<div class="flex flex-wrap items-stretch gap-y-6">
				{#each services as service, i}
					<div class="w-full px-4 md:w-4/12">
						<div class="rustic-card h-full py-5 px-6">
							<div class="flex flex-auto flex-col items-center justify-center">
								<div
									class="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-none bg-[var(--color-{service.color})] p-3 text-center text-white"
								>
									<service.icon class="h-8 w-8" />
								</div>
								<div class="text-center">
									<h3 class="rustic-header text-2xl mb-3 text-[var(--color-earth)]">{service.title}</h3>
									<p class="mb-4 text-[var(--color-earth)]">
										{service.description}
									</p>
									<a href="/Services" class="text-[var(--color-barn-red)] font-bold hover:underline inline-block mt-2">Learn More</a>
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
						<div class="absolute -left-4 top-0 bottom-0 w-1 bg-[var(--color-barn-red)]"></div>
						<h2 class="rustic-header text-4xl mb-4 text-[var(--color-earth)]">Family-Owned & Trusted</h2>
						<p class="mb-6 text-lg leading-relaxed">
							Travis Drilling is locally owned and operated in the Onoway area. We are dedicated to providing professional water well services with the reliability and personal touch that only a family business can deliver.
						</p>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
							{#each values as value}
								<div class="flex items-start">
									<div class="mr-4 p-3 bg-[var(--color-hay)] rounded-none">
										<value.icon class="h-6 w-6 text-[var(--color-earth)]" />
									</div>
									<div>
										<h3 class="font-bold text-xl mb-1">{value.title}</h3>
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

				<div class="hidden lg:block w-full px-4 lg:w-6/12 mt-12 lg:mt-0">
					<div class="relative mx-auto" style="max-width: 500px;">
						<!-- Main image with rustic frame effect -->
						<div class="relative border-8 border-[#F8F4E3] shadow-xl" style="transform: rotate(2deg);">
							<img src="/img/rig_original.jpg" alt="Drilling Rig" class="w-full object-cover" />
						</div>
						<!-- Decorative element -->
						<div class="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--color-barn-red)] -z-10"></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-16 bg-[var(--color-earth)] relative overflow-hidden">
		<!-- Decorative wood texture overlay -->
		<div class="absolute top-0 left-0 right-0 h-8 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-70"></div>
		<div class="absolute bottom-0 left-0 right-0 h-8 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-70"></div>
		
		<div class="container mx-auto px-4 py-8">
			<div class="flex flex-wrap justify-center text-center">
				<div class="w-full px-4 lg:w-8/12">
					<h2 class="rustic-header text-4xl text-[var(--color-wheat)] mb-6">Ready to Start Your Project?</h2>
					<p class="text-[var(--color-hay)] text-lg mb-8 max-w-3xl mx-auto">
						Contact us today to discuss your water well needs or to get an estimate for our services.
					</p>
					<div class="flex flex-col md:flex-row justify-center gap-4 mx-auto" style="max-width: 500px">
						<a href="tel:780-974-3184" class="rustic-button flex items-center justify-center">
							<Phone class="mr-2 h-5 w-5" />
							(780) 974-3184
						</a>
						<a href="mailto:contact@travisdrilling.ca" class="bg-[var(--color-wheat)] hover:bg-[var(--color-hay)] text-[var(--color-earth)] font-bold py-2 px-4 border-2 border-[var(--color-hay)] flex items-center justify-center transition-colors duration-200">
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
					<h2 class="rustic-header text-4xl mb-4 text-[var(--color-earth)]">Meet Our Team</h2>
					<div class="mx-auto h-1 w-20 bg-[var(--color-barn-red)] mb-6"></div>
					<p class="text-lg">The people behind Travis Drilling are experienced professionals dedicated to quality service.</p>
				</div>
			</div>
			<div class="flex flex-wrap justify-center">
				{#each profiles as profile}
					<div class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
						<div class="px-6">
							<div class="rustic-card p-2 inline-block mb-3">
								<img
									alt={profile.name}
									src={profile.imgSrc}
									class="w-40 max-w-full"
								/>
							</div>
							<div class="pt-2 text-center">
								<h3 class="rustic-header text-xl mb-1">{profile.name}</h3>
								<p class="text-[var(--color-barn-red)] font-medium">{profile.title}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
