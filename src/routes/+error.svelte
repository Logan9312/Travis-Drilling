<script lang="ts">
	import { page } from '$app/state';
	import CallButton from '$lib/CallButton.svelte';
	import SectionHeading from '$lib/SectionHeading.svelte';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Page not found' : 'Something went wrong'} | Travis Drilling LTD.</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="bg-white py-20 sm:py-28">
	<div class="page-container">
		<SectionHeading title={notFound ? 'Page not found' : 'Something went wrong'} level={1}>
			{notFound
				? "There's no page at this address. Head back to the home page, or call us."
				: 'This page could not load. You can still reach us by phone.'}
		</SectionHeading>

		<div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
			<CallButton surface="light" class="w-full sm:w-auto" />
			<a
				href="/"
				class="text-ink hover:border-ink focus-visible:ring-ink inline-flex min-h-14 items-center justify-center rounded-md border-2 border-slate-400 px-7 text-lg font-bold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Back to home
			</a>
		</div>
	</div>
</section>
