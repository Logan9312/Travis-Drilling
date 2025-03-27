<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { Mail, Phone, MapPin } from 'lucide-svelte';
</script>

<footer class="min-w-full bg-[var(--color-earth)] pb-8 pt-12 border-t-4 border-[var(--color-barn-red)] relative">
	<!-- Decorative wood texture overlay at top -->
	<div class="absolute top-0 left-0 right-0 h-6 bg-[url('/img/wood-texture.jpg')] bg-repeat-x opacity-70 -mt-6"></div>
	
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="text-[var(--color-wheat)]">
				<h4 class="rustic-header text-2xl mb-4 text-white border-b-2 border-[var(--color-barn-red)] pb-2 inline-block">Travis Drilling</h4>
				<p class="mb-4">Locally owned and operated water well drilling services. Providing quality service to the Onoway area and beyond.</p>
				<div class="flex mt-6">
					<a 
						href="https://github.com/Logan9312/Travis-Drilling"
						target="_blank"
						class="bg-white p-2 rounded-none mr-2 hover:bg-[var(--color-hay)] transition-colors duration-200" 
						aria-label="GitHub Repository"
					>
						<SiGithub color="var(--color-earth)" size={20} />
					</a>
				</div>
			</div>
			
			<div class="text-[var(--color-wheat)]">
				<h4 class="rustic-header text-2xl mb-4 text-white border-b-2 border-[var(--color-barn-red)] pb-2 inline-block">Services</h4>
				<ul class="space-y-2">
					<li><a href="/Services" class="hover:text-white transition-colors duration-200">Well Drilling</a></li>
					<li><a href="/Services" class="hover:text-white transition-colors duration-200">Servicing & Testing</a></li>
					<li><a href="/Services" class="hover:text-white transition-colors duration-200">Well Maintenance</a></li>
					<li><a href="/Services" class="hover:text-white transition-colors duration-200">Abandonment & Shocking</a></li>
					<li><a href="/Services" class="hover:text-white transition-colors duration-200">Backhoe Services</a></li>
				</ul>
			</div>
			
			<div class="text-[var(--color-wheat)]">
				<h4 class="rustic-header text-2xl mb-4 text-white border-b-2 border-[var(--color-barn-red)] pb-2 inline-block">Contact Us</h4>
				<ul class="space-y-3">
					<li class="flex items-start">
						<Phone class="mr-3 h-5 w-5 mt-1 text-[var(--color-hay)]" />
						<span>
							<a href="tel:780-974-3184" class="hover:text-white transition-colors duration-200">(780) 974-3184</a>
						</span>
					</li>
					<li class="flex items-start">
						<Mail class="mr-3 h-5 w-5 mt-1 text-[var(--color-hay)]" />
						<span>
							<a href="mailto:contact@travisdrilling.ca" class="hover:text-white transition-colors duration-200">contact@travisdrilling.ca</a>
						</span>
					</li>
					<li class="flex items-start">
						<MapPin class="mr-3 h-5 w-5 mt-1 text-[var(--color-hay)]" />
						<span>Onoway, Alberta, Canada</span>
					</li>
				</ul>
			</div>
		</div>
		
		<hr class="my-8 border-[var(--color-barn-red)] opacity-30" />
		
		<div class="text-center text-[var(--color-wheat)] text-sm">
			<p>© {new Date().getFullYear()} Travis Drilling LTD. All Rights Reserved.</p>
		</div>
	</div>
</footer>
