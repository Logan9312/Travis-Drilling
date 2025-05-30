<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Phone, Mail, MapPin } from 'lucide-svelte';
</script>

<footer class="min-w-full bg-gradient-to-b from-[#2C2C2C] to-[#1a1a1a] pt-8 pb-6 text-[#F5DEB3]">
	<div class="container mx-auto px-4">
		<div class="border-t-4 border-[#8B4513] pt-8">
			<div class="flex flex-wrap">
				<div class="w-full px-4 lg:w-6/12">
					<h4 class="font-western text-4xl tracking-wide">Ready to Strike Water?</h4>
					<p class="font-ranch mt-4 text-lg text-[#D2B48C]">
						Give us a holler for estimates and inquiries
					</p>
					<div class="mt-6 space-y-3">
						<a
							href="mailto:contact@travisdrilling.ca"
							class="flex items-center text-[#F5DEB3] transition-colors hover:text-white"
						>
							<Mail class="mr-3 h-5 w-5 text-[#B87333]" />
							<span class="font-ranch">contact@travisdrilling.ca</span>
						</a>
						<a
							href="tel:780-974-3184"
							class="flex items-center text-[#F5DEB3] transition-colors hover:text-white"
						>
							<Phone class="mr-3 h-5 w-5 text-[#B87333]" />
							<span class="font-ranch">(780) 974-3184</span>
						</a>
						<div class="flex items-start text-[#D2B48C]">
							<MapPin class="mt-1 mr-3 h-5 w-5 text-[#B87333]" />
							<span class="font-ranch">Onoway, Alberta</span>
						</div>
					</div>
				</div>
				<div class="mt-8 w-full px-4 text-center lg:mt-0 lg:w-6/12 lg:text-right">
					<p class="font-rustic text-xl text-[#D2B48C] italic">
						"Diggin' deep since way back when"
					</p>
					<p class="font-ranch mt-4 text-sm text-[#A0A0A0]">Family owned & operated</p>
				</div>
			</div>
			<hr class="my-8 border-[#654321]" />
			<div class="flex flex-wrap items-center justify-between">
				<div class="w-full px-4 text-center md:w-auto md:text-left">
					<p class="font-ranch text-sm text-[#A0A0A0]">
						© {new Date().getFullYear()} Travis Drilling LTD. All rights reserved.
					</p>
				</div>
				<div class="mt-4 px-4 text-center md:mt-0">
					<a
						href="https://github.com/Logan9312/Travis-Drilling"
						target="_blank"
						class="text-[#A0A0A0] transition-colors hover:text-[#F5DEB3]"
						aria-label="GitHub Repository"
					>
						<SiGithub class="h-6 w-6" />
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
