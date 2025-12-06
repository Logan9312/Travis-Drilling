<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
</script>

<footer class="min-w-full bg-gray-300 pt-8 pb-6">
	<div class="container mx-auto px-4">
		<div class="flex flex-wrap">
			<div class="w-full px-4 lg:w-6/12">
				<h4 class="text-3xl font-semibold">Inquiries/Estimates</h4>
				<h5 class="mt-0 mb-2 text-lg text-gray-700">
					Email:{' '}
					<a href="mailto:contact@travisdrilling.ca" class="underline">
						contact@travisdrilling.ca
					</a>
				</h5>
			</div>
		</div>
		<hr class="my-6 border-gray-400" />
		<div class="flex flex-wrap items-center justify-center md:justify-between">
			<div class="mx-auto px-4 text-center">
				<div class=" py-1 font-semibold text-gray-600">
					<a
						href="https://github.com/Logan9312/Travis-Drilling"
						target="_blank"
						class="hover:text-gray-900"
						aria-label="GitHub Repository"
					>
						<SiGithub />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
