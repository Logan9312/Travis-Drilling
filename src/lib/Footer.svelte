<script lang="ts">
	import { Mail, MapPin, Phone } from 'lucide-svelte';
	import CopyEmailButton from '$lib/CopyEmailButton.svelte';
	import { email, location, navItems, phone } from '$lib/site';
</script>

<footer class="bg-ink">
	<div class="page-container py-14">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
			<div>
				<img src="/img/logo_white.png" alt="Travis Drilling" class="mb-4 h-14 w-auto" />
				<p class="max-w-xs leading-relaxed text-slate-400">
					Locally owned and operated in {location}.
				</p>
			</div>

			<div>
				<h2 class="font-display mb-4 text-sm font-bold tracking-wider text-white uppercase">
					Contact
				</h2>
				<ul class="space-y-3 text-slate-300">
					<li>
						<a
							href={phone.href}
							class="inline-flex min-h-10 items-center gap-3 transition-colors hover:text-white"
						>
							<Phone class="text-brand h-5 w-5 shrink-0" aria-hidden="true" />
							{phone.display}
						</a>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="text-brand h-5 w-5 shrink-0" aria-hidden="true" />
						<CopyEmailButton {email} tone="dark" textClass="font-normal" />
					</li>
					<li class="flex min-h-10 items-center gap-3">
						<MapPin class="text-brand h-5 w-5 shrink-0" aria-hidden="true" />
						{location}, Canada
					</li>
				</ul>
			</div>

			<nav aria-label="Footer">
				<h2 class="font-display mb-4 text-sm font-bold tracking-wider text-white uppercase">
					Pages
				</h2>
				<ul class="space-y-1">
					{#each navItems as item (item.href)}
						<li>
							<a
								href={item.href}
								class="inline-flex min-h-10 items-center text-slate-300 transition-colors hover:text-white"
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="mt-12 border-t border-white/10 pt-6">
			<p class="text-sm text-slate-400">
				&copy; {new Date().getFullYear()} Travis Drilling LTD.
			</p>
		</div>
	</div>
</footer>
