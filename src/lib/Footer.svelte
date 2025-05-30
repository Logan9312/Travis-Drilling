<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import {
		Mail,
		Phone,
		MapPin,
		Droplets,
		Facebook,
		Instagram,
		Linkedin,
		ArrowUp
	} from 'lucide-svelte';
</script>

<footer
	class="relative border-t border-white/10 bg-gradient-to-b from-[var(--color-surface)] to-[var(--color-background)]"
>
	<!-- Decorative gradient overlay -->
	<div class="absolute inset-0 overflow-hidden">
		<div
			class="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-[var(--color-primary)] opacity-5 blur-3xl"
		></div>
		<div
			class="absolute right-1/4 -bottom-20 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-5 blur-3xl"
		></div>
	</div>

	<div class="relative z-10 container mx-auto px-4 pt-16 pb-8">
		<div class="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info -->
			<div class="space-y-4">
				<div class="mb-4 flex items-center gap-3">
					<div
						class="h-10 w-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-2 shadow-lg"
					>
						<Droplets class="h-full w-full text-white" />
					</div>
					<h4 class="modern-header text-2xl font-bold">Travis Drilling</h4>
				</div>
				<p class="leading-relaxed text-[var(--color-text-secondary)]">
					Professional water well drilling and services in Alberta. Trusted by homeowners and
					businesses for over 25 years.
				</p>
				<!-- Social Links -->
				<div class="flex gap-3 pt-4">
					<a href="#" class="modern-card p-3 transition-all hover:bg-white/20">
						<Facebook class="h-5 w-5 text-[var(--color-text-secondary)]" />
					</a>
					<a href="#" class="modern-card p-3 transition-all hover:bg-white/20">
						<Instagram class="h-5 w-5 text-[var(--color-text-secondary)]" />
					</a>
					<a href="#" class="modern-card p-3 transition-all hover:bg-white/20">
						<Linkedin class="h-5 w-5 text-[var(--color-text-secondary)]" />
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-6 text-xl font-bold text-white">Quick Links</h4>
				<ul class="space-y-3">
					<li>
						<a
							href="/"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Home</span>
						</a>
					</li>
					<li>
						<a
							href="/About"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>About Us</span>
						</a>
					</li>
					<li>
						<a
							href="/Services"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Our Services</span>
						</a>
					</li>
					<li>
						<a
							href="/Contact"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Get Quote</span>
						</a>
					</li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-6 text-xl font-bold text-white">Our Services</h4>
				<ul class="space-y-3">
					<li>
						<a
							href="/Services#drilling"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Well Drilling</span>
						</a>
					</li>
					<li>
						<a
							href="/Services#maintenance"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Maintenance & Repair</span>
						</a>
					</li>
					<li>
						<a
							href="/Services#testing"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Water Testing</span>
						</a>
					</li>
					<li>
						<a
							href="/Services#pumps"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Pump Installation</span>
						</a>
					</li>
					<li>
						<a
							href="/Services#emergency"
							class="group flex items-center gap-2 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
						>
							<span
								class="h-1 w-1 rounded-full bg-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100"
							></span>
							<span>Emergency Service</span>
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h4 class="mb-6 text-xl font-bold text-white">Get In Touch</h4>
				<ul class="space-y-4">
					<li>
						<a href="tel:780-974-3184" class="group flex items-start gap-3">
							<div class="icon-container mt-1 transition-transform group-hover:scale-110">
								<Phone class="h-5 w-5" />
							</div>
							<div>
								<p class="text-sm text-[var(--color-text-secondary)]">24/7 Emergency</p>
								<p class="font-semibold text-white">(780) 974-3184</p>
							</div>
						</a>
					</li>
					<li>
						<a href="mailto:contact@travisdrilling.ca" class="group flex items-start gap-3">
							<div class="icon-container mt-1 transition-transform group-hover:scale-110">
								<Mail class="h-5 w-5" />
							</div>
							<div>
								<p class="text-sm text-[var(--color-text-secondary)]">Email Us</p>
								<p class="font-semibold text-white">contact@travisdrilling.ca</p>
							</div>
						</a>
					</li>
					<li class="flex items-start gap-3">
						<div class="icon-container mt-1">
							<MapPin class="h-5 w-5" />
						</div>
						<div>
							<p class="text-sm text-[var(--color-text-secondary)]">Service Area</p>
							<p class="font-semibold text-white">Onoway, Alberta</p>
							<p class="text-sm text-[var(--color-text-secondary)]">& Surrounding Areas</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="modern-divider mb-8"></div>

		<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
			<div class="text-center md:text-left">
				<p class="text-sm text-[var(--color-text-secondary)]">
					© {new Date().getFullYear()} Travis Drilling LTD. All Rights Reserved.
				</p>
				<p class="mt-1 text-xs text-[var(--color-text-secondary)]">
					Licensed & Insured Water Well Contractor
				</p>
			</div>

			<!-- Back to top button -->
			<button
				onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				class="modern-card group p-3 transition-all hover:bg-white/20"
				aria-label="Back to top"
			>
				<ArrowUp
					class="h-5 w-5 text-[var(--color-text-secondary)] transition-colors group-hover:text-white"
				/>
			</button>
		</div>
	</div>
</footer>

<style>
	/* Footer-specific animations */
	footer a {
		transition: all 0.2s ease;
	}
</style>
