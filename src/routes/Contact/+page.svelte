<script lang="ts">
	import { Phone, Mail, MapPin, Clock } from 'lucide-svelte';
</script>

<div class="min-h-screen bg-[#FFF8DC]">
	<!-- Hero Section -->
	<div class="relative bg-gradient-to-b from-[#654321] to-[#8B4513] py-20">
		<div class="absolute inset-0 opacity-10">
			<div
				class="h-full w-full"
				style="background-image: repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px)"
			></div>
		</div>
		<div class="relative container mx-auto px-4 text-center">
			<h1 class="font-western text-shadow-western text-6xl text-[#F5DEB3]">Holler at Us</h1>
			<div class="mx-auto my-4 h-1 w-24 bg-[#F5DEB3]"></div>
			<p class="font-ranch text-xl text-[#D2B48C]">Ready to get that water flowing? Let's talk.</p>
		</div>
	</div>

	<!-- Contact Section -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<div class="grid gap-12 lg:grid-cols-2">
				<!-- Contact Form -->
				<div class="rounded-lg border-4 border-[#8B4513] bg-white p-8 shadow-xl">
					<h2 class="font-western mb-6 text-3xl text-[#2C2C2C]">Send Us a Message</h2>
					<form class="space-y-6">
						<div>
							<label for="name" class="font-ranch block text-lg text-[#654321]">Your Name</label>
							<input
								type="text"
								id="name"
								name="name"
								class="font-ranch mt-2 w-full rounded-sm border-2 border-[#D2B48C] px-4 py-3 focus:border-[#8B4513] focus:outline-none"
								placeholder="John Rancher"
							/>
						</div>

						<div>
							<label for="email" class="font-ranch block text-lg text-[#654321]">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								class="font-ranch mt-2 w-full rounded-sm border-2 border-[#D2B48C] px-4 py-3 focus:border-[#8B4513] focus:outline-none"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label for="phone" class="font-ranch block text-lg text-[#654321]">Phone</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								class="font-ranch mt-2 w-full rounded-sm border-2 border-[#D2B48C] px-4 py-3 focus:border-[#8B4513] focus:outline-none"
								placeholder="(780) 123-4567"
							/>
						</div>

						<div>
							<label for="message" class="font-ranch block text-lg text-[#654321]">Message</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								class="font-ranch mt-2 w-full rounded-sm border-2 border-[#D2B48C] px-4 py-3 focus:border-[#8B4513] focus:outline-none"
								placeholder="Tell us about your water well needs..."
							></textarea>
						</div>

						<button
							type="submit"
							class="font-western w-full rounded-sm bg-[#8B0000] py-4 text-xl tracking-wide text-[#F5DEB3] transition-all hover:bg-[#B7410E] hover:shadow-lg"
						>
							Send Message
						</button>
					</form>
				</div>

				<!-- Contact Information -->
				<div class="space-y-8">
					<!-- Contact Info Card -->
					<div class="rounded-lg border-4 border-[#8B4513] bg-white p-8 shadow-xl">
						<h2 class="font-western mb-6 text-3xl text-[#2C2C2C]">Get in Touch</h2>

						<div class="space-y-6">
							<div class="flex items-start">
								<Phone class="mt-1 mr-4 h-6 w-6 text-[#B87333]" />
								<div>
									<p class="font-ranch text-lg font-bold text-[#654321]">Phone</p>
									<a href="tel:780-974-3184" class="font-ranch text-[#8B4513] hover:text-[#B7410E]">
										(780) 974-3184
									</a>
								</div>
							</div>

							<div class="flex items-start">
								<Mail class="mt-1 mr-4 h-6 w-6 text-[#B87333]" />
								<div>
									<p class="font-ranch text-lg font-bold text-[#654321]">Email</p>
									<a
										href="mailto:contact@travisdrilling.ca"
										class="font-ranch text-[#8B4513] hover:text-[#B7410E]"
									>
										contact@travisdrilling.ca
									</a>
								</div>
							</div>

							<div class="flex items-start">
								<MapPin class="mt-1 mr-4 h-6 w-6 text-[#B87333]" />
								<div>
									<p class="font-ranch text-lg font-bold text-[#654321]">Location</p>
									<p class="font-ranch text-[#8B4513]">Onoway, Alberta</p>
									<p class="font-ranch text-sm text-[#A0A0A0]">Serving Central Alberta</p>
								</div>
							</div>

							<div class="flex items-start">
								<Clock class="mt-1 mr-4 h-6 w-6 text-[#B87333]" />
								<div>
									<p class="font-ranch text-lg font-bold text-[#654321]">Hours</p>
									<p class="font-ranch text-[#8B4513]">Mon-Fri: 7AM - 6PM</p>
									<p class="font-ranch text-[#8B4513]">Sat: 8AM - 4PM</p>
									<p class="font-ranch text-sm text-[#A0A0A0]">Emergency service available</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Service Area Card -->
					<div
						class="rounded-lg border-4 border-[#8B4513] bg-gradient-to-br from-[#654321] to-[#8B4513] p-8 text-[#F5DEB3] shadow-xl"
					>
						<h3 class="font-western mb-4 text-2xl">Service Area</h3>
						<p class="font-ranch leading-relaxed">
							We proudly serve Onoway and surrounding areas including Stony Plain, Spruce Grove,
							Mayerthorpe, Barrhead, and beyond. No job too far when it comes to finding water!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Map Section (Optional) -->
	<section class="border-t-4 border-[#8B4513] bg-[#2C2C2C] py-16">
		<div class="container mx-auto px-4 text-center">
			<p class="font-rustic text-2xl text-[#F5DEB3] italic">
				"Good fences make good neighbors, but good wells make them friends"
			</p>
		</div>
	</section>
</div>
