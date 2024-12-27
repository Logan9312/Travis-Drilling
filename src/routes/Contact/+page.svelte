<script>
	import { Mail, Phone } from 'lucide-svelte';
</script>

<div>
	<div class="flex flex-col items-center">
		<div class="text-center">
			<h2 class="mb-4 text-2xl font-bold">Contact Information</h2>
			<p class="text-left text-gray-600">
				<strong>For inquiries, contact us at:</strong>
			</p>
			<div class="">
				<p class="flex items-center text-gray-800">
					<Mail class="mr-2 h-5 w-5" />
					<a href="mailto:contact@travisdrilling.ca">
						<span class="mr-1 font-bold">Email: </span>{' '}
						contact@travisdrilling.ca
					</a>
				</p>
				<p class="flex items-center text-gray-800">
					<Phone class="mr-2 h-5 w-5" />
					<a href="tel:780-974-3184">
						<span class="mr-1 font-bold">Phone: </span> (780) 974 - 3184
					</a>
				</p>
			</div>
		</div>
	</div>
</div>
