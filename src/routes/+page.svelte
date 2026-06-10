<script lang="ts">
	import {
		Drill,
		Wrench,
		Gauge,
		Droplets,
		Waves,
		Shovel,
		MapPin,
		Phone,
		Mail,
		ArrowRight
	} from 'lucide-svelte';

	const services = [
		{
			icon: Drill,
			title: 'Water Well Drilling',
			description: 'New water wells drilled for agricultural and residential properties.'
		},
		{
			icon: Wrench,
			title: 'Servicing & Repair',
			description:
				'Service and repair on existing wells, with a range of replacement parts on hand.'
		},
		{
			icon: Gauge,
			title: 'Pump Installation & Repair',
			description: 'Supply, installation, and repair of well pumps.'
		},
		{
			icon: Droplets,
			title: 'Water & Well Testing',
			description: 'Testing to check your well water and flow.'
		},
		{
			icon: Waves,
			title: 'Abandonment & Shocking',
			description:
				'Decommissioning of unproductive wells, plus shocking and disinfection to keep a well healthy.'
		},
		{
			icon: Shovel,
			title: 'Backhoe & Trenching',
			description: 'Trenching and the installation or repair of underground water lines.'
		}
	];

	const serviceArea = [
		'Onoway',
		'Alberta Beach',
		'Sangudo',
		'Mayerthorpe',
		'Gunn',
		'Darwell',
		'Glenevis',
		'Cherhill',
		'Rochfort Bridge',
		'Lac Ste. Anne',
		'Stony Plain',
		'Spruce Grove',
		'Morinville',
		'Westlock',
		'Barrhead'
	];
</script>

<svelte:head>
	<title>Water Well Drilling & Service in Onoway, Alberta | Travis Drilling LTD.</title>
	<meta
		name="description"
		content="Water well drilling, servicing, pump installation, and water testing for Onoway, Alberta Beach, Sangudo, Mayerthorpe, Stony Plain, and nearby areas. Locally owned and operated. Call (780) 974-3184."
	/>
</svelte:head>

<!-- Hero -->
<section class="bg-ink relative flex min-h-svh flex-col justify-center overflow-hidden">
	<div
		class="absolute inset-0 bg-[url('/img/rig_cropped.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/img/rig.jpg')]"
	></div>
	<!-- Scrim weighted to the left, where all the text sits; lets the right-side sky stay bright -->
	<div
		class="from-ink/75 via-ink/25 absolute inset-0 bg-gradient-to-r to-transparent"
		aria-hidden="true"
	></div>
	<!-- Light bottom anchor so the buttons stay legible without darkening the whole foreground -->
	<div
		class="from-ink/35 absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t to-transparent"
		aria-hidden="true"
	></div>

	<div class="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<div
				class="rise bg-ink/60 mb-7 inline-flex items-center gap-2 rounded-md border border-white/20 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm"
				style="animation-delay: 0ms"
			>
				<MapPin class="text-brand h-4 w-4" />
				Onoway, Alberta
			</div>

			<h1
				class="rise font-display text-5xl font-extrabold tracking-tight text-white [text-shadow:0_1px_2px_rgb(11_17_23_/_0.6),0_4px_18px_rgb(11_17_23_/_0.4)] sm:text-7xl lg:text-8xl"
				style="animation-delay: 80ms"
			>
				Travis Drilling <span class="text-brand">LTD.</span>
			</h1>

			<p
				class="rise mt-6 max-w-xl text-lg leading-relaxed text-slate-100 [text-shadow:0_1px_8px_rgb(11_17_23_/_0.5)] sm:text-xl"
				style="animation-delay: 180ms"
			>
				Water well drilling and service for farms and homes around Onoway, Alberta. Locally owned
				and operated.
			</p>

			<div class="rise mt-9 flex flex-col gap-3 sm:flex-row" style="animation-delay: 280ms">
				<a
					href="tel:780-974-3184"
					class="bg-brand text-ink focus-visible:ring-offset-ink inline-flex items-center justify-center gap-2.5 rounded-md px-7 py-4 text-lg font-bold transition-colors hover:bg-[#33ccff] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					<Phone class="h-5 w-5" />
					(780) 974-3184
				</a>
				<a
					href="#services"
					class="bg-ink/50 focus-visible:ring-offset-ink hover:bg-ink/70 inline-flex items-center justify-center gap-2 rounded-md border border-white/45 px-7 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-colors [text-shadow:0_1px_4px_rgb(11_17_23_/_0.5)] hover:border-white/80 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					Services
					<ArrowRight class="h-5 w-5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services -->
<section id="services" class="scroll-mt-20 bg-white py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
		<div class="max-w-2xl">
			<h2 class="font-display text-ink text-3xl font-extrabold sm:text-4xl">What we do</h2>
			<div class="bg-brand mt-4 h-1 w-14"></div>
			<p class="mt-5 text-lg leading-relaxed text-slate-600">
				Drilling, servicing, and maintaining water wells for agricultural and residential
				properties.
			</p>
		</div>

		<div class="mt-12 grid gap-x-12 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.title)}
				<div class="flex gap-5 border-b border-slate-200 py-7">
					<div class="text-brand-deep mt-0.5 shrink-0">
						<service.icon class="h-7 w-7" strokeWidth={1.75} />
					</div>
					<div>
						<h3 class="font-display text-ink text-xl font-bold">{service.title}</h3>
						<p class="mt-1.5 leading-relaxed text-slate-600">{service.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About -->
<section class="bg-slate-50 py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<div class="order-2 lg:order-1">
				<img
					src="/img/Drilling_Pit.jpg"
					alt="A Travis Drilling water well drilling pit at a job site"
					class="aspect-[4/3] w-full object-cover shadow-lg"
					loading="lazy"
				/>
			</div>

			<div class="order-1 lg:order-2">
				<h2 class="font-display text-ink text-3xl font-extrabold sm:text-4xl">
					Locally owned and operated
				</h2>
				<div class="bg-brand mt-4 h-1 w-14"></div>
				<p class="mt-6 text-lg leading-relaxed text-slate-600">
					Travis Drilling is a local water well business based in Onoway. We drill, service, and
					maintain wells for farms and homes across the area.
				</p>
				<div
					class="mt-8 inline-flex items-center gap-2.5 rounded-md border border-slate-200 bg-white px-4 py-2.5 font-semibold text-slate-700"
				>
					<MapPin class="text-brand-deep h-5 w-5" />
					Onoway, Alberta, Canada
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Service area -->
<section class="bg-white py-20 sm:py-28">
	<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
		<div class="max-w-2xl">
			<h2 class="font-display text-ink text-3xl font-extrabold sm:text-4xl">Service Area</h2>
			<div class="bg-brand mt-4 h-1 w-14"></div>
			<p class="mt-5 text-lg leading-relaxed text-slate-600">
				We serve Onoway and the surrounding communities, including:
			</p>
		</div>

		<ul class="mt-9 flex flex-wrap gap-2.5">
			{#each serviceArea as town (town)}
				<li
					class="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 font-semibold text-slate-700"
				>
					{town}
				</li>
			{/each}
			<li class="text-brand-deep px-4 py-2 font-semibold">and nearby areas</li>
		</ul>
	</div>
</section>

<!-- Contact -->
<section class="bg-ink py-20 sm:py-28">
	<div class="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
		<h2 class="font-display text-3xl font-extrabold text-white sm:text-4xl">Get an estimate</h2>
		<div class="bg-brand mx-auto mt-4 h-1 w-14"></div>
		<p class="mt-6 text-lg leading-relaxed text-slate-300">
			Need a well drilled, a pump repaired, or your water tested? Give us a call.
		</p>

		<div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a
				href="tel:780-974-3184"
				class="bg-brand text-ink focus-visible:ring-offset-ink inline-flex w-full items-center justify-center gap-2.5 rounded-md px-7 py-4 text-lg font-bold transition-colors hover:bg-[#33ccff] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
			>
				<Phone class="h-5 w-5" />
				(780) 974-3184
			</a>
			<a
				href="mailto:contact@travisdrilling.ca"
				class="focus-visible:ring-offset-ink inline-flex w-full items-center justify-center gap-2.5 rounded-md border border-white/30 px-7 py-4 text-lg font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none sm:w-auto"
			>
				<Mail class="h-5 w-5" />
				contact@travisdrilling.ca
			</a>
		</div>
	</div>
</section>

<style>
	.rise {
		animation: rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(1.25rem);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
