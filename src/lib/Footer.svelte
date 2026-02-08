<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="bg-gray-900">
	<div class="container mx-auto px-6 py-12">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			<!-- Brand -->
			<div>
				<img src="/img/logo_white.png" alt="Travis Drilling" class="mb-4 h-14 w-auto" />
				<p class="max-w-xs text-gray-400">
					Locally owned and operated water well drilling services serving Onoway and surrounding
					areas.
				</p>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Contact</h4>
				<div class="space-y-3">
					<a
						href="tel:780-974-3184"
						class="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
					>
						<Phone class="h-5 w-5 shrink-0 text-[#00bfff]" />
						<span class="leading-none">(780) 974-3184</span>
					</a>
					<a
						href="mailto:contact@travisdrilling.ca"
						class="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
					>
						<Mail class="h-5 w-5 text-[#00bfff]" />
						contact@travisdrilling.ca
					</a>
					<div class="flex items-center gap-3 text-gray-400">
						<MapPin class="h-5 w-5 text-[#00bfff]" />
						Onoway, Alberta, Canada
					</div>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-4 text-sm font-bold tracking-wider text-white uppercase">Quick Links</h4>
				<div class="space-y-2">
					<a href="/" class="block text-gray-400 transition-colors hover:text-white"> Home </a>
					<a href="/Contact" class="block text-gray-400 transition-colors hover:text-white">
						Contact
					</a>
					<a href="/#services" class="block text-gray-400 transition-colors hover:text-white">
						Services
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row"
		>
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Travis Drilling LTD. All rights reserved.
			</p>
			<a
				href="https://github.com/Logan9312/Travis-Drilling"
				target="_blank"
				class="text-gray-500 transition-colors hover:text-white"
				aria-label="GitHub Repository"
			>
				<SiGithub size={20} />
			</a>
		</div>
	</div>
</footer>
