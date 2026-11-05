<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';

	// Tapping the address copies it (owner's choice over mailto). The trailing
	// "Copy" label says so up front and turns into "Copied" in place.
	let {
		email,
		tone = 'light',
		textClass = 'text-lg font-bold'
	}: {
		email: string;
		tone?: 'light' | 'dark';
		textClass?: string;
	} = $props();

	let copied = $state(false);
	let resetTimer: number | undefined = undefined;

	const toneClass = $derived(
		tone === 'dark'
			? 'text-white focus-visible:ring-white focus-visible:ring-offset-ink'
			: 'text-brand-deep focus-visible:ring-brand-deep focus-visible:ring-offset-white'
	);

	const labelClass = $derived(
		copied
			? 'border-brand bg-brand text-ink'
			: tone === 'dark'
				? 'border-white/60 text-white group-hover:border-white'
				: 'border-slate-400 text-slate-700 group-hover:border-brand-deep group-hover:text-brand-deep'
	);

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
		}, 2000);
	}
</script>

<button
	type="button"
	class="group {toneClass} inline-flex min-h-10 max-w-full flex-wrap items-center gap-x-2.5 gap-y-1 rounded-md py-1 text-left leading-tight focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
	onclick={copyEmail}
	aria-label="Copy email address {email}"
>
	<span class="{textClass} min-w-0 wrap-anywhere">{email}</span>
	<span
		class="{labelClass} inline-flex min-w-[5.75rem] shrink-0 items-center justify-center gap-1.5 rounded-md border-2 px-2 py-0.5 text-sm font-bold transition-colors"
		aria-hidden="true"
	>
		{#if copied}
			<Check class="h-4 w-4" strokeWidth={2.5} />
			Copied
		{:else}
			<Copy class="h-4 w-4" />
			Copy
		{/if}
	</span>
</button>
<span class="sr-only" role="status">{copied ? 'Email address copied' : ''}</span>
