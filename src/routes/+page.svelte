<script lang="ts">
	import { Droplets, Mail, MapPin, Phone, Shovel, Wrench, ChevronDown } from 'lucide-svelte';

	const services = [
		{
			icon: Wrench,
			title: 'Drilling, Servicing, Testing',
			description:
				'For any of your agricultural or residential needs, we offer a journeyman service and repair technician with a variety of replacement parts.',
			color: 'bg-[#00bfff]'
		},
		{
			icon: Droplets,
			title: 'Abandonment, Shocking',
			description:
				'Well abandonment and decommissioning services are available for any unproductive wells. Well maintenance and shocking services help to maintain a healthy and productive well.',
			color: 'bg-[#00bfff]'
		},
		{
			icon: Shovel,
			title: 'Backhoe Services',
			description:
				'Our backhoe service is available for trenching, installation and repair of underground water lines, and more.',
			color: 'bg-[#00bfff]'
		}
	];

</script>

<!-- Hero Section -->
<section class="relative min-h-screen overflow-hidden">
	<div
		class="absolute inset-0 bg-[url('/img/rig_cropped.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/img/rig.jpg')]"
	>
		<div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
	</div>

	<div class="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
		<div class="max-w-4xl">
			<p class="mb-4 text-sm font-semibold uppercase tracking-widest text-[#00bfff]">
				Onoway, Alberta
			</p>
			<h1 class="mb-6 text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
				Travis Drilling
				<span class="block text-[#00bfff]">LTD.</span>
			</h1>
			<p class="mx-auto mb-10 max-w-2xl text-xl text-gray-300 md:text-2xl">
				Water Well Drilling and Service for Agricultural and Residential Properties
			</p>
			<a
				href="tel:780-974-3184"
				class="mb-6 inline-flex items-center gap-3 bg-[#00bfff] px-10 py-5 text-xl font-bold uppercase tracking-wide text-white transition-all hover:bg-[#33ccff] sm:text-2xl"
			>
				<Phone class="h-6 w-6 sm:h-7 sm:w-7" />
				(780) 974-3184
			</a>
			<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<a
					href="#services"
					class="bg-[#00bfff] px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:bg-[#33ccff]"
				>
					Our Services
				</a>
				<a
					href="/Contact"
					class="inline-flex items-center gap-2 border-2 border-white/40 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
				>
					Contact Us
				</a>
			</div>
		</div>

		<a href="#services" class="absolute bottom-10 animate-bounce text-white/60 hover:text-white">
			<ChevronDown class="h-8 w-8" />
		</a>
	</div>
</section>

<!-- Services Section -->
<section id="services" class="bg-gray-100 py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="text-3xl font-black uppercase text-gray-900 md:text-4xl">Our Services</h2>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each services as service}
				<div class="bg-white shadow-md">
					<div class="{service.color} flex h-16 items-center justify-center">
						<service.icon class="h-8 w-8 text-white" />
					</div>
					<div class="p-6">
						<h3 class="mb-3 text-xl font-bold uppercase text-gray-900">
							{service.title}
						</h3>
						<p class="leading-relaxed text-gray-600">
							{service.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About Section -->
<section class="bg-gray-900 py-20">
	<div class="container mx-auto px-4">
		<div class="grid items-center gap-12 lg:grid-cols-2">
			<div>
				<h2 class="mb-6 text-3xl font-black uppercase text-white md:text-4xl">
					About Us
				</h2>
				<p class="mb-8 text-lg leading-relaxed text-gray-300">
					Travis Drilling is locally owned and operated in the Onoway area. We are dedicated to
					providing a professional water well drilling service.
				</p>
				<div class="flex items-center gap-3 text-gray-300">
					<MapPin class="h-5 w-5 text-[#00bfff]" />
					<span>Onoway, Alberta, Canada</span>
				</div>
			</div>

			<div>
				<img
					src="/img/Drilling_Pit.png"
					alt="Water well drilling pit"
					class="w-full"
				/>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="relative overflow-hidden bg-[#00bfff] py-20">
	<div class="absolute inset-0 bg-[url('/img/rig.jpg')] bg-cover bg-center opacity-10"></div>
	<div class="container relative mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="mb-6 text-3xl font-black uppercase text-white md:text-4xl">Contact Us</h2>
			<p class="mb-10 text-xl text-white/80">
				To discuss your drilling needs or to receive an estimate on services, you can contact us at the following:
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="tel:780-974-3184"
					class="inline-flex items-center gap-2 bg-white px-8 py-4 font-bold uppercase tracking-wide text-gray-900 transition-all hover:bg-gray-100"
				>
					<Phone class="h-5 w-5" />
					(780) 974-3184
				</a>
				<a
					href="mailto:contact@travisdrilling.ca"
					class="border-2 border-white px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-gray-900"
				>
					contact@travisdrilling.ca
				</a>
			</div>
		</div>
	</div>
</section>
