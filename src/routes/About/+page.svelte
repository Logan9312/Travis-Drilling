<script lang="ts">
	import { Award, Calendar, HardHat, Heart } from 'lucide-svelte';

	const milestones = [
		{ year: 'Way Back When', event: 'Travis Drilling was born from a handshake and a promise' },
		{ year: 'Through the Years', event: 'Drilled thousands of wells across Alberta' },
		{ year: 'Today', event: 'Three generations strong and still going' }
	];

	const values = [
		{
			icon: Heart,
			title: 'Family Values',
			description: "We treat every customer like family, because that's the Alberta way."
		},
		{
			icon: HardHat,
			title: 'Hard Work',
			description: 'No shortcuts, no excuses. Just honest work done right the first time.'
		},
		{
			icon: Award,
			title: 'Quality Service',
			description: 'Licensed, insured, and committed to excellence in every well we drill.'
		}
	];
</script>

<div class="min-h-screen bg-[#FFF8DC]">
	<!-- Hero Section -->
	<div class="relative bg-gradient-to-b from-[#8B4513] to-[#654321] py-20">
		<div class="absolute inset-0 opacity-10">
			<div
				class="h-full w-full"
				style="background-image: repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(255,255,255,.1) 40px, rgba(255,255,255,.1) 80px)"
			></div>
		</div>
		<div class="relative container mx-auto px-4 text-center">
			<h1 class="font-western text-shadow-western text-6xl text-[#F5DEB3]">Our Story</h1>
			<div class="mx-auto my-4 h-1 w-24 bg-[#F5DEB3]"></div>
			<p class="font-rustic text-2xl text-[#D2B48C] italic">
				Three generations of water well excellence
			</p>
		</div>
	</div>

	<!-- Story Section -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl">
				<div class="rounded-lg border-4 border-[#8B4513] bg-white p-8 shadow-xl md:p-12">
					<p class="font-ranch text-xl leading-relaxed text-[#654321]">
						Travis Drilling isn't just a business – it's a legacy. What started as one man with a
						drill and a dream has grown into Alberta's trusted name in water well services.
					</p>
					<p class="font-ranch mt-6 text-xl leading-relaxed text-[#654321]">
						We've been serving the hardworking folks of Onoway and beyond for generations, bringing
						clean, reliable water to farms, ranches, and homes across Central Alberta. From the
						smallest residential well to the biggest agricultural project, we approach every job
						with the same dedication and craftsmanship that built our reputation.
					</p>
					<blockquote class="mt-8 border-l-4 border-[#8B0000] pl-6">
						<p class="font-rustic text-2xl text-[#8B4513] italic">
							"We don't just drill wells, we help communities thrive"
						</p>
						<footer class="font-ranch mt-2 text-[#A0A0A0]">- Jason Travis, Owner</footer>
					</blockquote>
				</div>
			</div>
		</div>
	</section>

	<!-- Timeline Section -->
	<section class="bg-gradient-to-b from-[#F5DEB3] to-[#FFF8DC] py-16">
		<div class="container mx-auto px-4">
			<h2 class="font-western mb-12 text-center text-5xl text-[#2C2C2C]">Our Journey</h2>
			<div class="mx-auto max-w-3xl">
				{#each milestones as milestone, i}
					<div class="mb-8 flex items-start">
						<div
							class="mr-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#8B0000] text-white"
						>
							<Calendar class="h-6 w-6" />
						</div>
						<div
							class={i < milestones.length - 1
								? 'border-b-2 border-dashed border-[#D2B48C] pb-8'
								: ''}
						>
							<h3 class="font-western text-2xl text-[#654321]">{milestone.year}</h3>
							<p class="font-ranch mt-2 text-lg text-[#8B4513]">{milestone.event}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Values Section -->
	<section class="py-16">
		<div class="container mx-auto px-4">
			<h2 class="font-western mb-12 text-center text-5xl text-[#2C2C2C]">What We Stand For</h2>
			<div class="grid gap-8 md:grid-cols-3">
				{#each values as value}
					<div class="group text-center">
						<div
							class="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#654321] text-[#F5DEB3] transition-all group-hover:bg-[#8B4513]"
						>
							<value.icon class="h-10 w-10" />
						</div>
						<h3 class="font-western mb-4 text-2xl text-[#2C2C2C]">{value.title}</h3>
						<p class="font-ranch text-[#654321]">{value.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Team Photo Section -->
	<section class="bg-[#2C2C2C] py-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="font-western mb-8 text-4xl text-[#F5DEB3]">Meet the Travis Drilling Family</h2>
				<div
					class="mx-auto mb-8 h-64 w-full max-w-2xl rounded-lg border-4 border-[#8B4513] bg-[#654321] shadow-xl"
				>
					<!-- Placeholder for team photo -->
					<div class="flex h-full items-center justify-center">
						<p class="font-ranch text-[#D2B48C]">Team Photo</p>
					</div>
				</div>
				<p class="font-ranch text-xl text-[#D2B48C]">
					From our family to yours, we're proud to be your trusted water well partner.
				</p>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="bg-gradient-to-b from-[#8B0000] to-[#B7410E] py-16">
		<div class="container mx-auto px-4 text-center">
			<h2 class="font-western mb-6 text-4xl text-[#F5DEB3]">Ready to Work Together?</h2>
			<p class="font-ranch mb-8 text-xl text-[#D2B48C]">Let's talk about your water well needs</p>
			<a
				href="/Contact"
				class="font-ranch inline-block rounded-sm border-2 border-[#F5DEB3] bg-transparent px-8 py-4 text-lg font-bold tracking-wider text-[#F5DEB3] uppercase transition-all hover:bg-[#F5DEB3] hover:text-[#8B0000]"
			>
				Get in Touch
			</a>
		</div>
	</section>
</div>
