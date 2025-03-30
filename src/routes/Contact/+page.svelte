<script lang="ts">
	import { Mail, Phone, MapPin, Clock } from 'lucide-svelte';
</script>

<div class="pt-24 pb-16">
	<div class="container mx-auto px-4">
		<!-- Contact Header -->
		<div class="text-center mb-16">
			<h1 class="rustic-header text-4xl lg:text-5xl mb-4 text-[var(--color-earth)]">Contact Us</h1>
			<div class="h-1 w-20 bg-[var(--color-barn-red)] mx-auto mb-6"></div>
			<p class="max-w-2xl mx-auto text-lg">
				Have questions about our water well services or ready to schedule an appointment? 
				Get in touch with Travis Drilling using any of the methods below.
			</p>
		</div>

		<!-- Contact Information -->
		<div class="flex flex-wrap -mx-4">
			<!-- Contact Details -->
			<div class="w-full mx-auto max-w-3xl px-4">
				<div class="rustic-card p-8">
					<h2 class="rustic-header text-3xl mb-6 text-center text-[var(--color-earth)]">Get In Touch</h2>
					
					<div class="space-y-6 max-w-xl mx-auto">
						<div class="flex items-start">
							<div class="mr-4 p-3 bg-[var(--color-barn-red)]">
								<Phone class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="text-lg font-bold mb-1">Phone</h3>
								<p><a href="tel:780-974-3184" class="hover:text-[var(--color-barn-red)] transition-colors duration-200">(780) 974-3184</a></p>
								<p class="text-sm mt-1">Call us directly for immediate assistance</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 p-3 bg-[var(--color-forest)]">
								<Mail class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="text-lg font-bold mb-1">Email</h3>
								<p><a href="mailto:contact@travisdrilling.ca" class="hover:text-[var(--color-barn-red)] transition-colors duration-200">contact@travisdrilling.ca</a></p>
								<p class="text-sm mt-1">Reach out via email for quotes, scheduling, or any questions</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 p-3 bg-[var(--color-rustic-brown)]">
								<MapPin class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="text-lg font-bold mb-1">Location</h3>
								<p>Onoway, Alberta, Canada</p>
							</div>
						</div>

						<div class="flex items-start">
							<div class="mr-4 p-3 bg-[var(--color-hay)]">
								<Clock class="h-6 w-6 text-white" />
							</div>
							<div>
								<h3 class="text-lg font-bold mb-1">Hours</h3>
								<p>Monday - Friday: 8:00 AM - 5:00 PM</p>
								<p>Saturday: By appointment</p>
								<p>Sunday: Closed</p>
							</div>
						</div>
					</div>

					<div class="mt-8 border-t border-[var(--color-rustic-brown)] pt-6 max-w-xl mx-auto">
						<h3 class="rustic-header text-xl mb-3">Service Area</h3>
						<p class="mb-2">We proudly serve Onoway and surrounding areas throughout Alberta.</p>
						<p>Please contact us to confirm service availability in your specific location.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mt-20">
			<div class="text-center mb-12">
				<h2 class="rustic-header text-3xl mb-4 text-[var(--color-earth)]">Frequently Asked Questions</h2>
				<div class="h-1 w-20 bg-[var(--color-barn-red)] mx-auto mb-6"></div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="rustic-card p-6">
					<h3 class="rustic-header text-xl mb-3">How far in advance should I schedule a service?</h3>
					<p>We recommend scheduling at least 2-3 weeks in advance for most services. For emergency repairs, we make every effort to accommodate urgent needs as quickly as possible.</p>
				</div>

				<div class="rustic-card p-6">
					<h3 class="rustic-header text-xl mb-3">What areas do you service?</h3>
					<p>We service Onoway and surrounding areas throughout Alberta. Please contact us to confirm service availability in your specific location.</p>
				</div>

				<div class="rustic-card p-6">
					<h3 class="rustic-header text-xl mb-3">Do you provide free estimates?</h3>
					<p>Yes, we provide free estimates for all of our services. Contact us to schedule an assessment of your specific needs.</p>
				</div>

				<div class="rustic-card p-6">
					<h3 class="rustic-header text-xl mb-3">How long does a typical well drilling project take?</h3>
					<p>The time frame varies depending on the specific project, depth requirements, and ground conditions. Most residential well installations take 1-3 days to complete once we begin work.</p>
				</div>
			</div>
		</div>
	</div>
</div>