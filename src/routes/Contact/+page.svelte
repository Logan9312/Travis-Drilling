<script lang="ts">
	import { Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-gray-100">
	<!-- Header -->
	<section class="bg-gray-900 py-16">
		<div class="container mx-auto px-6 text-center">
			<h1 class="mb-4 text-3xl font-black uppercase text-white md:text-4xl">Contact Information</h1>
			<p class="mx-auto max-w-2xl text-lg text-gray-400">
				For inquiries, contact us at:
			</p>
		</div>
	</section>

	<!-- Contact Cards -->
	<section class="py-12">
		<div class="container mx-auto px-6">
			<div class="mx-auto max-w-3xl">
				<div class="grid gap-4 md:grid-cols-2">
					<!-- Phone Card -->
					<a
						href="tel:780-974-3184"
						class="group flex items-start gap-4 bg-white p-6 shadow-md transition-all hover:shadow-lg"
					>
						<div class="flex h-12 w-12 shrink-0 items-center justify-center bg-[#00bfff] text-white">
							<Phone class="h-6 w-6" />
						</div>
						<div>
							<h3 class="mb-1 font-bold uppercase text-gray-900">Phone</h3>
							<p class="text-xl font-bold leading-none text-[#00bfff] group-hover:text-[#33ccff]">
								(780) 974-3184
							</p>
						</div>
					</a>

					<!-- Email Card -->
					<a
						href="mailto:contact@travisdrilling.ca"
						class="group flex items-start gap-4 bg-white p-6 shadow-md transition-all hover:shadow-lg"
					>
						<div class="flex h-12 w-12 shrink-0 items-center justify-center bg-[#00bfff] text-white">
							<Mail class="h-6 w-6" />
						</div>
						<div>
							<h3 class="mb-1 font-bold uppercase text-gray-900">Email</h3>
							<p class="text-xl font-bold text-[#00bfff] group-hover:text-[#33ccff]">
								contact@travisdrilling.ca
							</p>
						</div>
					</a>

					<!-- Location Card -->
					<div class="flex items-start gap-4 bg-white p-6 shadow-md md:col-span-2">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center bg-gray-800 text-white">
							<MapPin class="h-6 w-6" />
						</div>
						<div>
							<h3 class="mb-1 font-bold uppercase text-gray-900">Location</h3>
							<p class="text-xl font-bold text-gray-700">Onoway, Alberta</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
