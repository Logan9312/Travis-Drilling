<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import CallButton from '$lib/CallButton.svelte';
	import CopyEmailButton from '$lib/CopyEmailButton.svelte';
	import SectionHeading from '$lib/SectionHeading.svelte';
	import { email, location, phone } from '$lib/site';
</script>

<svelte:head>
	<title>Contact | Travis Drilling LTD.</title>
	<meta
		name="description"
		content="Contact Travis Drilling for water well drilling and service in Onoway, Alberta. Call {phone.display}."
	/>
</svelte:head>

<section class="bg-ink py-10 sm:py-20">
	<div class="page-container">
		<SectionHeading title="Contact us" level={1} surface="dark">
			Call or email about a well, a pump, or anything else. Based in Onoway, serving the surrounding
			area.
		</SectionHeading>
	</div>
</section>

<section class="bg-white py-10 sm:py-20">
	<div class="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] xl:gap-20">
		<dl class="divide-y divide-slate-200 border-y border-slate-200">
			<div class="grid gap-3 py-7 sm:grid-cols-[9rem_1fr] sm:items-center sm:gap-8">
				<dt class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
					Phone
				</dt>
				<dd>
					<CallButton surface="light" class="w-full sm:w-auto" />
				</dd>
			</div>

			<div class="grid gap-2 py-7 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-8">
				<dt class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
					Email
				</dt>
				<dd>
					<CopyEmailButton {email} textClass="text-lg font-bold sm:text-xl" />
				</dd>
			</div>

			<div class="grid gap-2 py-7 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-8">
				<dt class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
					Location
				</dt>
				<dd>
					<p class="text-ink text-xl font-bold">{location}, Canada</p>
					<a
						href="/#area"
						class="text-brand-deep hover:text-ink mt-1 inline-flex min-h-10 items-center gap-1.5 font-bold underline-offset-4 hover:underline"
					>
						Towns we serve
						<ArrowRight class="h-4 w-4" aria-hidden="true" />
					</a>
				</dd>
			</div>
		</dl>

		<!-- Photo fills the height of the details list, never stretches it. -->
		<div class="relative hidden lg:block">
			<img
				src="/img/rig_cropped.jpg"
				alt="Travis Drilling's rig set up at a water well job site"
				width="672"
				height="921"
				class="absolute inset-0 h-full w-full object-cover object-[60%_80%]"
				loading="lazy"
			/>
		</div>
	</div>
</section>
