<script lang="ts">
	import { Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="bg-ink">
	<div class="container mx-auto px-6 py-14">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			<!-- Brand -->
			<div>
				<img src="/img/logo_white.png" alt="Travis Drilling" class="mb-4 h-14 w-auto" />
				<p class="max-w-xs leading-relaxed text-slate-400">
					Locally owned and operated water well drilling and service, based in Onoway, Alberta.
				</p>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="font-display mb-4 text-sm font-bold tracking-wider text-white uppercase">
					Contact
				</h4>
				<div class="space-y-3">
					<a
						href="tel:780-974-3184"
						class="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
					>
						<Phone class="text-brand h-5 w-5 shrink-0" />
						<span class="leading-none">(780) 974-3184</span>
					</a>
					<a
						href="mailto:contact@travisdrilling.ca"
						class="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
					>
						<Mail class="text-brand h-5 w-5" />
						contact@travisdrilling.ca
					</a>
					<div class="flex items-center gap-3 text-slate-300">
						<MapPin class="text-brand h-5 w-5" />
						Onoway, Alberta, Canada
					</div>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="font-display mb-4 text-sm font-bold tracking-wider text-white uppercase">
					Quick Links
				</h4>
				<div class="space-y-2">
					<a href="/" class="block text-slate-300 transition-colors hover:text-white"> Home </a>
					<a href="/#services" class="block text-slate-300 transition-colors hover:text-white">
						Services
					</a>
					<a href="/Contact" class="block text-slate-300 transition-colors hover:text-white">
						Contact
					</a>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-12 border-t border-white/10 pt-6">
			<p class="text-sm text-slate-500">
				&copy; {new Date().getFullYear()} Travis Drilling LTD. All rights reserved.
			</p>
		</div>
	</div>
</footer>
