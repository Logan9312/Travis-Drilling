<script lang="ts">
	import { Mail, Phone, MapPin, Clock } from 'lucide-svelte';
</script>

<div class="pt-24 pb-16">
	<div class="container mx-auto px-4">
		<!-- Contact Header -->
		<div class="mb-16 text-center">
			<h1 class="rustic-header mb-4 text-4xl text-[var(--color-earth)] lg:text-5xl">Contact Us</h1>
			<div class="mx-auto mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
			<p class="mx-auto max-w-2xl text-lg">
				Have questions about our water well services or ready to schedule an appointment? Get in
				touch with Travis Drilling using any of the methods below.
			</p>
		</div>

		<!-- Contact Information -->
		<div class="-mx-4 flex flex-wrap">
			<!-- Contact Details -->
			<div class="mx-auto w-full max-w-3xl px-4">
				<div class="rustic-card p-8">
					<h2 class="rustic-header mb-6 text-center text-3xl text-[var(--color-earth)]">
						Get In Touch
					</h2>

					<div class="mx-auto max-w-xl space-y-6">
						<div class="flex items-start">
							<div class="mr-4 bg-[var(--color-barn-red)] p-3">
								<Phone class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="mb-1 text-lg font-bold">Phone</h3>
								<p>
									<a
										href="tel:780-974-3184"
										class="transition-colors duration-200 hover:text-[var(--color-barn-red)]"
										>(780) 974-3184</a
									>
								</p>
								<p class="mt-1 text-sm">Call us directly for immediate assistance</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 bg-[var(--color-forest)] p-3">
								<Mail class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="mb-1 text-lg font-bold">Email</h3>
								<p>
									<a
										href="mailto:contact@travisdrilling.ca"
										class="transition-colors duration-200 hover:text-[var(--color-barn-red)]"
										>contact@travisdrilling.ca</a
									>
								</p>
								<p class="mt-1 text-sm">
									Reach out via email for quotes, scheduling, or any questions
								</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 bg-[var(--color-rustic-brown)] p-3">
								<MapPin class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="mb-1 text-lg font-bold">Location</h3>
								<p>Onoway, Alberta, Canada</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 bg-[var(--color-hay)] p-3">
								<Clock class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="mb-1 text-lg font-bold">Hours</h3>
								<p>Monday - Friday: 8:00 AM - 5:00 PM</p>
								<p>Saturday: By appointment</p>
								<p>Sunday: Closed</p>
							</div>
						</div>
					</div>

					<div class="mx-auto mt-8 max-w-xl border-t border-[var(--color-rustic-brown)] pt-6">
						<h3 class="rustic-header mb-3 text-xl">Service Area</h3>
						<p class="mb-2">We proudly serve Onoway and surrounding areas throughout Alberta.</p>
						<p>Please contact us to confirm service availability in your specific location.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mt-20">
			<div class="mb-12 text-center">
				<h2 class="rustic-header mb-4 text-3xl text-[var(--color-earth)]">
					Frequently Asked Questions
				</h2>
				<div class="mx-auto mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="rustic-card p-6">
					<h3 class="rustic-header mb-3 text-xl">
						How far in advance should I schedule a service?
					</h3>
					<p>
						We recommend scheduling at least 2-3 weeks in advance for most services. For emergency
						repairs, we make every effort to accommodate urgent needs as quickly as possible.
					</p>
				</div>

				<div class="rustic-card p-6">
					<h3 class="rustic-header mb-3 text-xl">What areas do you service?</h3>
					<p>
						We service Onoway and surrounding areas throughout Alberta. Please contact us to confirm
						service availability in your specific location.
					</p>
				</div>

				<div class="rustic-card p-6">
					<h3 class="rustic-header mb-3 text-xl">Do you provide free estimates?</h3>
					<p>
						Yes, we provide free estimates for all of our services. Contact us to schedule an
						assessment of your specific needs.
					</p>
				</div>

				<div class="rustic-card p-6">
					<h3 class="rustic-header mb-3 text-xl">
						How long does a typical well drilling project take?
					</h3>
					<p>
						The time frame varies depending on the specific project, depth requirements, and ground
						conditions. Most residential well installations take 1-3 days to complete once we begin
						work.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
