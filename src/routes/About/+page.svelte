<script lang="ts">
	import { Mail, Phone, Shield, Award, Users } from 'lucide-svelte';
</script>

<div class="pt-24 pb-16">
	<div class="container mx-auto px-4">
		<!-- Hero Section -->
		<div class="flex flex-wrap items-center">
			<div class="w-full px-4 lg:w-6/12">
				<h1 class="rustic-header mb-4 text-4xl text-[var(--color-earth)] lg:text-5xl">
					About Travis Drilling
				</h1>
				<div class="mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
				<p class="mb-8 text-xl leading-relaxed">
					Locally owned and operated in the Onoway area, Travis Drilling is dedicated to providing
					professional water well services with the reliability that only comes from years of
					experience.
				</p>
				<p class="mb-8">
					With deep roots in Alberta's farming community, we understand the unique needs of rural
					properties and agricultural operations when it comes to water access and management.
				</p>
			</div>
			<div class="w-full px-4 lg:w-6/12">
				<div class="relative mx-auto" style="max-width: 500px;">
					<!-- Main image with rustic frame effect -->
					<div
						class="relative border-8 border-[#F8F4E3] shadow-xl"
						style="transform: rotate(-2deg);"
					>
						<img src="/img/rig_original.jpg" alt="Drilling Rig" class="w-full object-cover" />
					</div>
					<!-- Decorative element -->
					<div class="absolute -top-6 -right-6 -z-10 h-24 w-24 bg-[var(--color-hay)]"></div>
				</div>
			</div>
		</div>

		<!-- Values Section -->
		<div class="py-20">
			<div class="mb-16 text-center">
				<h2 class="rustic-header mb-4 text-4xl text-[var(--color-earth)]">Our Values</h2>
				<div class="mx-auto mb-6 h-1 w-20 bg-[var(--color-barn-red)]"></div>
				<p class="mx-auto max-w-3xl">
					At Travis Drilling, we believe in honest work, quality service, and building lasting
					relationships with our clients.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div class="rustic-card p-8 text-center">
					<div
						class="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-none bg-[var(--color-barn-red)] p-3 text-white"
					>
						<Shield class="h-8 w-8" />
					</div>
					<h3 class="rustic-header mb-3 text-2xl">Quality Guarantee</h3>
					<p>
						We stand behind our work with complete confidence. Your satisfaction and the quality of
						our service are our highest priorities.
					</p>
				</div>

				<div class="rustic-card p-8 text-center">
					<div
						class="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-none bg-[var(--color-rustic-brown)] p-3 text-white"
					>
						<Award class="h-8 w-8" />
					</div>
					<h3 class="rustic-header mb-3 text-2xl">Professional Expertise</h3>
					<p>
						With years of experience in the field, our team brings expert knowledge and technical
						skill to every project we undertake.
					</p>
				</div>

				<div class="rustic-card p-8 text-center">
					<div
						class="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-none bg-[var(--color-forest)] p-3 text-white"
					>
						<Users class="h-8 w-8" />
					</div>
					<h3 class="rustic-header mb-3 text-2xl">Community Focus</h3>
					<p>
						As a local business, we're committed to serving our community with honesty, integrity,
						and neighborly care.
					</p>
				</div>
			</div>
		</div>

		<!-- History Section -->
		<div class="py-10">
			<div class="flex flex-wrap items-center">
				<div class="order-2 mt-10 w-full px-4 lg:order-1 lg:mt-0 lg:w-6/12">
					<div class="relative border-l-4 border-[var(--color-barn-red)] pl-6">
						<h2 class="rustic-header mb-4 text-4xl text-[var(--color-earth)]">Our History</h2>
						<p class="mb-4">
							Founded on the principles of hard work and exceptional service, Travis Drilling has
							been meeting the water well needs of Alberta residents for years.
						</p>
						<p class="mb-4">
							What started as a small family operation has grown into a trusted name in water well
							services throughout the region, while maintaining the personal touch that sets us
							apart.
						</p>
						<p>
							Our journey is built on relationships with our clients, many of whom have been with us
							since the beginning and continue to rely on our expertise for all their water well
							needs.
						</p>
					</div>
				</div>

				<div class="order-1 w-full px-4 lg:order-2 lg:w-6/12">
					<div class="grid grid-cols-2 gap-4">
						<div class="rustic-card rotate-2 transform p-2">
							<img
								src="/img/rig_cropped.jpg"
								alt="Drilling Operation"
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="rustic-card mt-10 -rotate-2 transform p-2">
							<img src="/img/rig.jpg" alt="Equipment" class="h-full w-full object-cover" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA Section -->
		<div class="rustic-card mt-16 p-10 text-center">
			<h2 class="rustic-header mb-4 text-3xl">Ready to work with us?</h2>
			<p class="mx-auto mb-6 max-w-2xl">
				Contact Travis Drilling today to discuss your water well needs or to schedule a service
				appointment.
			</p>
			<div class="flex flex-col justify-center gap-4 md:flex-row">
				<a href="tel:780-974-3184" class="rustic-button flex items-center justify-center">
					<Phone class="mr-2 h-5 w-5" />
					(780) 974-3184
				</a>
				<a
					href="mailto:contact@travisdrilling.ca"
					class="flex items-center justify-center border-2 border-[var(--color-rustic-brown)] bg-[var(--color-wheat)] px-4 py-2 font-bold text-[var(--color-earth)] transition-colors duration-200 hover:bg-[var(--color-hay)]"
				>
					<Mail class="mr-2 h-5 w-5" />
					Email Us
				</a>
			</div>
		</div>
	</div>
</div>
