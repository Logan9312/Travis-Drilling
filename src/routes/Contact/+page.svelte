<script lang="ts">
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import CopyEmailButton from '$lib/CopyEmailButton.svelte';

	const email = 'travisdrillingltd@gmail.com';
</script>

<svelte:head>
	<title>Contact | Travis Drilling LTD.</title>
	<meta
		name="description"
		content="Contact Travis Drilling for water well drilling and service in Onoway, Alberta. Call (780) 974-3184."
	/>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Header -->
	<section class="bg-ink py-20 sm:py-24">
		<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
			<h1 class="font-display text-4xl font-extrabold text-white sm:text-5xl">Contact us</h1>
			<div class="bg-brand mt-4 h-1 w-14"></div>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
				Call or email to talk about a well, a pump, or anything else. Based in Onoway, serving the
				surrounding area.
			</p>
		</div>
	</section>

	<!-- Contact cards -->
	<section class="py-16 sm:py-24">
		<div class="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
			<div class="grid gap-4 sm:grid-cols-2">
				<!-- Phone -->
				<a
					href="tel:780-974-3184"
					class="group hover:border-brand focus-visible:ring-brand-deep flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:gap-4 sm:p-6"
				>
					<div
						class="bg-brand text-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-md sm:h-12 sm:w-12"
					>
						<Phone class="h-5 w-5 sm:h-6 sm:w-6" />
					</div>
					<div>
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Phone
						</h2>
						<p class="text-brand-deep mt-1 text-xl leading-tight font-bold">(780) 974-3184</p>
					</div>
				</a>

				<!-- Email -->
				<div
					class="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:gap-4 sm:p-6"
				>
					<div
						class="bg-brand text-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-md sm:h-12 sm:w-12"
					>
						<Mail class="h-5 w-5 sm:h-6 sm:w-6" />
					</div>
					<div class="min-w-0">
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Email
						</h2>
						<div class="mt-1">
							<CopyEmailButton {email} textClass="text-base font-bold sm:text-lg" />
						</div>
					</div>
				</div>

				<!-- Location -->
				<div
					class="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:col-span-2 sm:gap-4 sm:p-6"
				>
					<div
						class="bg-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white sm:h-12 sm:w-12"
					>
						<MapPin class="h-5 w-5 sm:h-6 sm:w-6" />
					</div>
					<div>
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Location
						</h2>
						<p class="text-ink mt-1 text-xl leading-tight font-bold">Onoway, Alberta</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
