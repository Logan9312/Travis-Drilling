<script lang="ts">
	import { Drill, Wrench, Gauge, Droplets, Waves, Shovel, ArrowDown } from 'lucide-svelte';
	import CallButton from '$lib/CallButton.svelte';
	import CopyEmailButton from '$lib/CopyEmailButton.svelte';
	import SectionHeading from '$lib/SectionHeading.svelte';
	import { email, phone } from '$lib/site';

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

	// Home base first, then alphabetical so visitors can find their town.
	const serviceArea = [
		'Onoway',
		'Alberta Beach',
		'Barrhead',
		'Cherhill',
		'Darwell',
		'Glenevis',
		'Gunn',
		'Lac Ste. Anne',
		'Mayerthorpe',
		'Morinville',
		'Rochfort Bridge',
		'Sangudo',
		'Spruce Grove',
		'Stony Plain',
		'Westlock'
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
<section
	class="bg-ink relative flex min-h-[74svh] flex-col justify-center overflow-hidden lg:min-h-[78svh]"
>
	<div
		class="absolute inset-0 bg-[url('/img/rig_cropped.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/img/rig.jpg')]"
	></div>
	<!-- Scrim weighted to the left, where all the text sits; lets the right-side sky stay bright -->
	<div
		class="from-ink/85 via-ink/45 absolute inset-0 bg-gradient-to-r to-transparent"
		aria-hidden="true"
	></div>
	<div
		class="from-ink/50 absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent"
		aria-hidden="true"
	></div>

	<div class="page-container relative z-10 pt-24 pb-12 lg:pt-28 lg:pb-16">
		<div class="max-w-3xl">
			<h1
				class="rise font-display text-5xl font-extrabold tracking-tight text-white [text-shadow:0_1px_2px_rgb(11_17_23_/_0.6),0_4px_18px_rgb(11_17_23_/_0.4)] sm:text-7xl lg:text-8xl"
				style="animation-delay: 80ms"
			>
				Travis Drilling <span class="text-brand">LTD.</span>
			</h1>

			<p
				class="rise mt-6 max-w-xl text-lg leading-relaxed text-white [text-shadow:0_1px_8px_rgb(11_17_23_/_0.6)] sm:text-xl"
				style="animation-delay: 180ms"
			>
				Water well drilling and service for farms and homes around Onoway, Alberta.
			</p>

			<div class="rise mt-9 flex flex-col gap-3 sm:flex-row" style="animation-delay: 280ms">
				<CallButton />
				<a
					href="#services"
					class="focus-visible:ring-offset-ink inline-flex min-h-14 items-center justify-center gap-2 rounded-md px-3 text-lg font-bold text-white underline decoration-white/50 underline-offset-[6px] [text-shadow:0_1px_6px_rgb(11_17_23_/_0.7)] hover:decoration-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					Our services
					<ArrowDown class="h-5 w-5" aria-hidden="true" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services: what we do -->
<section id="services" class="scroll-mt-20 bg-white pt-14 pb-20 sm:pt-16 sm:pb-28 lg:scroll-mt-24">
	<div class="page-container">
		<SectionHeading title="What we do">
			Drilling, servicing, and maintaining water wells for agricultural and residential properties.
		</SectionHeading>

		<ul class="mt-12 grid gap-x-12 border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.title)}
				<li class="flex gap-5 border-b border-slate-200 py-7">
					<div class="text-brand-deep mt-0.5 shrink-0">
						<service.icon class="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
					</div>
					<div>
						<h3 class="font-display text-ink text-xl font-bold">{service.title}</h3>
						<p class="mt-1.5 leading-relaxed text-slate-600">{service.description}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Service area: where we work -->
<section id="area" class="scroll-mt-20 lg:scroll-mt-24 bg-slate-50 py-20 sm:py-28">
	<div class="page-container">
		<SectionHeading title="Service area">
			Based in Onoway. We work in these communities and nearby areas:
		</SectionHeading>

		<ul
			class="text-ink mt-10 columns-2 gap-x-10 text-lg font-semibold sm:columns-3 lg:columns-5"
			aria-label="Towns served"
		>
			{#each serviceArea as town (town)}
				<li class="flex items-center gap-3 py-1.5 break-inside-avoid">
					<span class="bg-brand h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden="true"></span>
					{town}
				</li>
			{/each}
		</ul>
		<p class="mt-8 text-lg text-slate-700">
			Outside these towns? We cover the surrounding area too.
			<a
				href={phone.href}
				class="text-brand-deep hover:text-ink font-bold whitespace-nowrap underline underline-offset-4"
				>Call {phone.display}</a
			> to check.
		</p>
	</div>
</section>

<!-- About: who we are -->
<section id="about" class="scroll-mt-20 lg:scroll-mt-24 bg-white py-20 sm:py-28">
	<div class="page-container">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<img
				src="/img/Drilling_Pit.jpg"
				alt="A Travis Drilling water well drilling pit at a job site"
				width="750"
				height="536"
				class="order-2 aspect-[4/3] w-full object-cover lg:order-1"
				loading="lazy"
			/>

			<div class="order-1 lg:order-2">
				<SectionHeading title="About Travis Drilling" />
				<p class="mt-6 text-lg leading-relaxed text-slate-700">
					Travis Drilling is a locally owned and operated water well business based in Onoway,
					Alberta. We drill new wells and look after existing ones for farms and homes across the
					area.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Contact: the call -->
<section id="contact" class="bg-ink py-20 sm:py-28">
	<div class="page-container">
		<SectionHeading title="Get an estimate" surface="dark">
			Need a well drilled, a pump repaired, or your water tested? Give us a call.
		</SectionHeading>

		<div class="mt-10 flex flex-col items-start gap-5">
			<CallButton class="w-full sm:w-auto" />
			<p class="flex flex-wrap items-center gap-x-2 text-slate-300">
				<span>Or email</span>
				<CopyEmailButton {email} tone="dark" textClass="font-bold" />
			</p>
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
