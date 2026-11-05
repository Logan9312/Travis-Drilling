<script lang="ts">
	import { Phone } from 'lucide-svelte';
	import { phone } from '$lib/site';

	// The one call-to-action. Black text on the logo blue (white fails contrast).
	let {
		size = 'lg',
		surface = 'dark',
		class: className = ''
	}: {
		size?: 'sm' | 'lg';
		/** Background the button sits on, for the focus ring offset. */
		surface?: 'dark' | 'light';
		class?: string;
	} = $props();
</script>

<a
	href={phone.href}
	class="bg-brand text-ink inline-flex items-center justify-center rounded-md font-bold whitespace-nowrap transition-colors hover:bg-[#33ccff] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none {size ===
	'lg'
		? 'min-h-14 gap-2.5 px-7 text-lg'
		: 'min-h-11 gap-2 px-4 text-sm tracking-wide'} {surface === 'dark'
		? 'focus-visible:ring-offset-ink focus-visible:ring-white'
		: 'focus-visible:ring-ink focus-visible:ring-offset-white'} {className}"
>
	<Phone class={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} aria-hidden="true" />
	<span><span class="sr-only">Call </span>{phone.display}</span>
</a>
