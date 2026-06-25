<script lang="ts">
	import { Check, Copy, Mail, MapPin, Phone } from 'lucide-svelte';

	const email = 'travisdrillingltd@gmail.com';

	let copied = $state(false);
	let resetTimer: number | undefined = undefined;

	function copyWithFallback(text: string) {
		const textArea = document.createElement('textarea');
		textArea.value = text;
		textArea.setAttribute('readonly', '');
		textArea.style.position = 'fixed';
		textArea.style.left = '-9999px';
		textArea.style.top = '0';

		document.body.appendChild(textArea);
		textArea.select();

		const successful = document.execCommand('copy');
		document.body.removeChild(textArea);

		if (!successful) {
			throw new Error('Copy failed');
		}
	}

	async function copyEmail() {
		if (resetTimer) {
			window.clearTimeout(resetTimer);
		}

		try {
			if (!navigator.clipboard?.writeText) {
				throw new Error('Clipboard API unavailable');
			}
			await navigator.clipboard.writeText(email);
		} catch {
			copyWithFallback(email);
		}

		copied = true;
		resetTimer = window.setTimeout(() => {
			copied = false;
		}, 1600);
	}
</script>

<svelte:head>
	<title>Contact | Travis Drilling LTD.</title>
	<meta
		name="description"
		content="Contact Travis Drilling for water well drilling and service in Onoway, Alberta. Call (780) 974-3184."
	/>
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Header -->
	<section class="bg-ink py-20 sm:py-24">
		<div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
			<h1 class="font-display text-4xl font-extrabold text-white sm:text-5xl">Contact us</h1>
			<div class="bg-brand mt-4 h-1 w-14"></div>
			<p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
				Call or email to talk about a well, a pump, or anything else. Based in Onoway, serving the
				surrounding area.
			</p>
		</div>
	</section>

	<!-- Contact cards -->
	<section class="py-16 sm:py-24">
		<div class="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
			<div class="grid gap-4 sm:grid-cols-2">
				<!-- Phone -->
				<a
					href="tel:780-974-3184"
					class="group hover:border-brand focus-visible:ring-brand-deep flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 transition-colors focus-visible:ring-2 focus-visible:outline-none sm:gap-4 sm:p-6"
				>
					<div
						class="bg-brand text-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-md sm:h-12 sm:w-12"
					>
						<Phone class="h-5 w-5 sm:h-6 sm:w-6" />
					</div>
					<div>
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Phone
						</h2>
						<p class="text-brand-deep mt-1 text-xl leading-tight font-bold">(780) 974-3184</p>
					</div>
				</a>

				<!-- Email -->
				<button
					type="button"
					class="group hover:border-brand focus-visible:ring-brand-deep relative flex w-full items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 text-left transition-[border-color,transform] active:scale-[0.96] focus-visible:ring-2 focus-visible:outline-none sm:gap-4 sm:p-6"
					onclick={copyEmail}
					aria-label={copied ? 'Email copied' : `Copy ${email}`}
				>
					<div
						class="bg-brand text-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-md sm:h-12 sm:w-12"
					>
						<Mail class="h-5 w-5 sm:h-6 sm:w-6" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="flex items-center gap-1.5">
							<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
								Email
							</h2>
							<span class="relative h-4 w-4 text-brand-deep" aria-hidden="true">
								<Copy
									class="absolute inset-0 h-4 w-4 transition-[opacity,scale,filter] duration-150 {copied
										? 'scale-[0.25] opacity-0 blur-[4px]'
										: 'scale-100 opacity-70 blur-none'}"
								/>
								<Check
									class="absolute inset-0 h-4 w-4 transition-[opacity,scale,filter] duration-150 {copied
										? 'scale-100 opacity-100 blur-none'
										: 'scale-[0.25] opacity-0 blur-[4px]'}"
								/>
							</span>
						</div>
						<div class="mt-1">
							<span
								class="text-brand-deep inline-flex min-h-10 min-w-0 items-center py-1.5 text-lg leading-tight font-bold wrap-anywhere"
							>
								{email}
							</span>
						</div>
					</div>

					{#if copied}
						<span
							class="bg-ink pointer-events-none absolute top-3 right-3 rounded-md px-3 py-1.5 text-sm font-bold whitespace-nowrap text-white shadow-[0_12px_30px_rgba(11,17,23,0.22)]"
							role="status"
						>
							Copied
						</span>
					{/if}
				</button>

				<!-- Location -->
				<div
					class="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5 sm:col-span-2 sm:gap-4 sm:p-6"
				>
					<div
						class="bg-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white sm:h-12 sm:w-12"
					>
						<MapPin class="h-5 w-5 sm:h-6 sm:w-6" />
					</div>
					<div>
						<h2 class="font-display text-sm font-bold tracking-wider text-slate-500 uppercase">
							Location
						</h2>
						<p class="text-ink mt-1 text-xl leading-tight font-bold">Onoway, Alberta</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
