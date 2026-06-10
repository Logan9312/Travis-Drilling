<script lang="ts">
	import { MapPin, Phone } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About | Travis Drilling LTD.</title>
	<meta
		name="description"
		content="Travis Drilling is a locally owned and operated water well drilling and service business based in Onoway, Alberta."
	/>
</svelte:head>

<!-- Header -->
<section class="bg-ink py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
		<h1 class="font-display text-4xl font-extrabold text-white sm:text-5xl">
			About Travis Drilling
		</h1>
		<div class="bg-brand mt-4 h-1 w-14"></div>
	</div>
</section>

<!-- Body -->
<section class="bg-white py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
		<div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
			<div>
				<p class="text-xl leading-relaxed text-slate-700">
					Travis Drilling is a locally owned and operated water well business based in Onoway,
					Alberta.
				</p>
				<p class="mt-5 text-lg leading-relaxed text-slate-600">
					We drill new wells and service existing ones for farms and homes across the Onoway area,
					handling pumps, water testing, well abandonment and shocking, and backhoe work along the
					way.
				</p>
				<div class="mt-9 flex flex-col gap-3 sm:flex-row">
					<a
						href="tel:780-974-3184"
						class="bg-brand text-ink focus-visible:ring-ink inline-flex items-center justify-center gap-2.5 rounded-md px-7 py-4 text-lg font-bold transition-colors hover:bg-[#33ccff] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
					>
						<Phone class="h-5 w-5" />
						(780) 974-3184
					</a>
					<div
						class="inline-flex items-center justify-center gap-2.5 rounded-md border border-slate-200 bg-slate-50 px-5 py-4 font-semibold text-slate-700"
					>
						<MapPin class="text-brand-deep h-5 w-5" />
						Onoway, Alberta, Canada
					</div>
				</div>
			</div>

			<div>
				<img
					src="/img/rig.jpg"
					alt="Travis Drilling's rig set up at a water well job site"
					class="aspect-[4/3] w-full object-cover shadow-lg"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>
