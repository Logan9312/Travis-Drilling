<script lang="ts">
	import type { Snippet } from 'svelte';

	// Section title + the short blue rule + optional one-line lead.
	let {
		title,
		level = 2,
		surface = 'light',
		align = 'left',
		children
	}: {
		title: string;
		level?: 1 | 2;
		surface?: 'light' | 'dark';
		align?: 'left' | 'center';
		children?: Snippet;
	} = $props();

	const tag = $derived(`h${level}`);
</script>

<div class="max-w-2xl {align === 'center' ? 'mx-auto text-center' : ''}">
	<svelte:element
		this={tag}
		class="font-display font-extrabold {surface === 'dark' ? 'text-white' : 'text-ink'} {level === 1
			? 'text-4xl sm:text-5xl'
			: 'text-3xl sm:text-4xl'}"
	>
		{title}
	</svelte:element>
	<div class="bg-brand mt-4 h-1 w-14 {align === 'center' ? 'mx-auto' : ''}"></div>
	{#if children}
		<p
			class="mt-5 text-lg leading-relaxed {surface === 'dark'
				? 'text-slate-300'
				: 'text-slate-600'}"
		>
			{@render children()}
		</p>
	{/if}
</div>
