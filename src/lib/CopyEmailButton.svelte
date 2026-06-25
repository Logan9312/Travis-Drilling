<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';

	let {
		email,
		label = 'Copy email',
		tone = 'light'
	}: {
		email: string;
		label?: string;
		tone?: 'light' | 'dark';
	} = $props();

	let copied = $state(false);
	let resetTimer: number | undefined = undefined;

	const buttonClass = $derived(
		tone === 'dark'
			? 'border-white/25 bg-white/10 text-white hover:border-white/50 hover:bg-white/15 focus-visible:ring-white focus-visible:ring-offset-ink'
			: 'border-slate-200 bg-slate-50 text-ink hover:border-slate-300 hover:bg-slate-100 focus-visible:ring-brand-deep focus-visible:ring-offset-white'
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
		}, 1600);
	}
</script>

<button
	type="button"
	class="{buttonClass} inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-md border px-3.5 text-sm font-bold transition-[background-color,border-color,color,transform] active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
	onclick={copyEmail}
	aria-label={copied ? 'Email copied' : label}
>
	{#if copied}
		<Check class="h-4 w-4" />
		Copied
	{:else}
		<Copy class="h-4 w-4" />
		{label}
	{/if}
</button>
