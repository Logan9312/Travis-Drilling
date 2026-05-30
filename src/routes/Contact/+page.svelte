<script lang="ts">
	import { Mail, MapPin, Phone } from 'lucide-svelte';
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
					class="group hover:border-brand focus-visible:ring-brand-deep flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-colors focus-visible:ring-2 focus-visible:outline-none"
				>
					<div class="bg-brand text-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-md">
						<Phone class="h-6 w-6" />
					</div>
					<div>
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Phone
						</h2>
						<p class="text-brand-deep mt-1 text-xl leading-tight font-bold">(780) 974-3184</p>
					</div>
				</a>

				<!-- Email -->
				<a
					href="mailto:contact@travisdrilling.ca"
					class="group hover:border-brand focus-visible:ring-brand-deep flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-colors focus-visible:ring-2 focus-visible:outline-none"
				>
					<div class="bg-brand text-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-md">
						<Mail class="h-6 w-6" />
					</div>
					<div>
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Email
						</h2>
						<p class="text-brand-deep mt-1 text-lg leading-tight font-bold break-all">
							contact@travisdrilling.ca
						</p>
					</div>
				</a>

				<!-- Location -->
				<div class="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-6 sm:col-span-2">
					<div class="bg-ink flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-white">
						<MapPin class="h-6 w-6" />
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
