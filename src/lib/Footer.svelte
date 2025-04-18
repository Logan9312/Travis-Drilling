<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Mail, Phone, MapPin } from 'lucide-svelte';
</script>

<footer
	class="relative min-w-full border-t-4 border-[var(--color-barn-red)] bg-[var(--color-earth)] pt-12 pb-8"
>
	<!-- Decorative wood texture overlay at top -->
	<div
		class="absolute top-0 right-0 left-0 -mt-6 h-6 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-70"
	></div>

	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="text-[var(--color-wheat)]">
				<h4
					class="rustic-header mb-4 inline-block border-b-2 border-[var(--color-barn-red)] pb-2 text-2xl text-white"
				>
					Travis Drilling
				</h4>
				<p class="mb-4">
					Locally owned and operated water well drilling services. Providing service to the Onoway
					area and beyond.
				</p>
			</div>

			<div class="text-[var(--color-wheat)]">
				<h4
					class="rustic-header mb-4 inline-block border-b-2 border-[var(--color-barn-red)] pb-2 text-2xl text-white"
				>
					Services
				</h4>
				<ul class="space-y-2">
					<li>
						<a href="/Services" class="transition-colors duration-200 hover:text-white"
							>Well Drilling</a
						>
					</li>
					<li>
						<a href="/Services" class="transition-colors duration-200 hover:text-white"
							>Servicing & Testing</a
						>
					</li>
					<li>
						<a href="/Services" class="transition-colors duration-200 hover:text-white"
							>Well Maintenance</a
						>
					</li>
					<li>
						<a href="/Services" class="transition-colors duration-200 hover:text-white"
							>Abandonment & Shocking</a
						>
					</li>
					<li>
						<a href="/Services" class="transition-colors duration-200 hover:text-white"
							>Backhoe Services</a
						>
					</li>
				</ul>
			</div>

			<div class="text-[var(--color-wheat)]">
				<h4
					class="rustic-header mb-4 inline-block border-b-2 border-[var(--color-barn-red)] pb-2 text-2xl text-white"
				>
					Contact Us
				</h4>
				<ul class="space-y-3">
					<li class="flex items-start">
						<Phone class="mt-1 mr-3 h-5 w-5 text-[var(--color-hay)]" />
						<span>
							<a href="tel:780-974-3184" class="transition-colors duration-200 hover:text-white"
								>(780) 974-3184</a
							>
						</span>
					</li>
					<li class="flex items-start">
						<Mail class="mt-1 mr-3 h-5 w-5 text-[var(--color-hay)]" />
						<span>
							<a
								href="mailto:contact@travisdrilling.ca"
								class="transition-colors duration-200 hover:text-white">contact@travisdrilling.ca</a
							>
						</span>
					</li>
					<li class="flex items-start">
						<MapPin class="mt-1 mr-3 h-5 w-5 text-[var(--color-hay)]" />
						<span>Onoway, Alberta, Canada</span>
					</li>
				</ul>
			</div>
		</div>

		<hr class="my-8 border-[var(--color-barn-red)] opacity-30" />

		<div class="text-center text-sm text-[var(--color-wheat)]">
			<p>© {new Date().getFullYear()} Travis Drilling LTD. All Rights Reserved.</p>
		</div>
	</div>
</footer>
