<script>
	import { Mail, Phone } from 'lucide-svelte';
</script>

<div>
	<div>
		<div>
			<h2>Contact Information</h2>
			<p>
				<strong>For inquiries, contact us at:</strong>
			</p>
			<div>
				<p >
					<Mail />
					<a href="mailto:contact@travisdrilling.ca">
						<span>Email: </span>{' '}
						contact@travisdrilling.ca
					</a>
				</p>
				<p >
					<Phone />
					<a href="tel:780-974-3184">
						<span>Phone: </span> (780) 974 - 3184
					</a>
				</p>
			</div>
		</div>
	</div>
</div>
