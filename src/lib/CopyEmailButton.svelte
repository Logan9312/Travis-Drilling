<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';

	let {
		email,
		tone = 'light',
		textClass = 'text-lg font-bold',
		variant = 'text',
		showIcon = true
	}: {
		email: string;
		tone?: 'light' | 'dark';
		textClass?: string;
		variant?: 'text' | 'icon';
		showIcon?: boolean;
	} = $props();

	let copied = $state(false);
	let resetTimer: number | undefined = undefined;

	const buttonClass = $derived(
		tone === 'dark'
			? 'text-white hover:text-brand focus-visible:ring-white focus-visible:ring-offset-ink'
			: 'text-brand-deep hover:text-ink focus-visible:ring-brand-deep focus-visible:ring-offset-white'
	);

	const toastClass = $derived(
		tone === 'dark'
			? 'bg-white text-ink shadow-[0_12px_30px_rgba(0,0,0,0.28)]'
			: 'bg-ink text-white shadow-[0_12px_30px_rgba(11,17,23,0.22)]'
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

<span class="relative inline-flex min-w-0">
	{#if variant === 'icon'}
		<button
			type="button"
			class="{buttonClass} inline-flex h-10 w-10 items-center justify-center rounded-md transition-[color,transform] active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			onclick={copyEmail}
			aria-label={copied ? 'Email copied' : `Copy ${email}`}
		>
			<span class="relative h-4 w-4" aria-hidden="true">
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
		</button>
	{:else}
		<button
			type="button"
			class="{buttonClass} {textClass} relative inline-flex min-h-10 min-w-0 items-center rounded-md py-1.5 text-left leading-tight transition-[color,transform] active:scale-[0.96] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			onclick={copyEmail}
			aria-label={copied ? 'Email copied' : `Copy ${email}`}
		>
			<span class="min-w-0 wrap-anywhere">{email}</span>
			{#if showIcon}
				<span class="absolute right-0 bottom-2 h-4 w-4 translate-x-5" aria-hidden="true">
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
			{/if}
		</button>
	{/if}

	{#if copied}
		<span
			class="{toastClass} pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-md px-3 py-1.5 text-sm font-bold whitespace-nowrap"
			role="status"
		>
			Copied
		</span>
	{/if}
</span>
