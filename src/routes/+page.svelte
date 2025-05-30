<script lang="ts">
	import {
		Droplets,
		Mail,
		Phone,
		Shovel,
		Wrench,
		Zap,
		Pickaxe,
		Tractor,
		Users
	} from 'lucide-svelte';

	const profiles = [
		{ name: 'Jason Travis', role: 'Head Rancher', imgSrc: '/img/blank.png' },
		{ name: 'Christy Travis', role: 'Operations', imgSrc: '/img/blank.png' },
		{ name: 'Hayden Borle', role: 'Field Hand', imgSrc: '/img/blank.png' }
	];

	const services = [
		{
			title: 'Well Drilling & Service',
			description:
				"From sunrise to sunset, we're drilling and servicing wells for farms and homesteads across Alberta. Our journeyman technicians bring years of experience to every job.",
			icon: Pickaxe,
			color: 'bg-[#8B0000]'
		},
		{
			title: 'Well Abandonment & Shocking',
			description:
				"When it's time to retire an old well, we handle it right. Plus, our shocking services keep your water flowing clean and clear as a mountain stream.",
			icon: Droplets,
			color: 'bg-[#1E40AF]'
		},
		{
			title: 'Backhoe Services',
			description:
				"Need trenching or underground water line work? Our backhoe service tackles the tough jobs so you don't have to.",
			icon: Tractor,
			color: 'bg-[#B87333]'
		}
	];
</script>

<div>
	<!-- Hero Section with Parallax Effect -->
	<div
		class="relative flex min-h-[80vh] content-center items-center justify-center overflow-hidden"
	>
		<div
			class="absolute top-0 h-full w-full bg-[url('/img/rig_cropped.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/img/rig.jpg')] lg:bg-fixed"
		>
			<div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
		</div>
		<div class="relative container mx-auto px-4 text-center">
			<div class="mx-auto max-w-4xl">
				<p class="font-ranch text-xl tracking-[0.3em] text-[#F5DEB3] uppercase">
					Est. Way Back When
				</p>
				<h1
					class="font-western text-shadow-western mt-4 text-6xl leading-tight text-white md:text-8xl"
				>
					TRAVIS DRILLING
				</h1>
				<div class="mx-auto my-6 h-1 w-32 bg-[#8B4513]"></div>
				<p class="font-rustic text-2xl text-[#F5DEB3] italic md:text-3xl">
					"Where Alberta's Water Runs Deep"
				</p>
				<p class="font-ranch mt-6 text-lg text-gray-200">
					Water Well Drilling • Servicing • Testing
				</p>
				<a
					href="/Contact"
					class="font-ranch mt-8 inline-block rounded-sm border-2 border-[#F5DEB3] bg-[#8B0000] px-8 py-4 text-lg font-bold tracking-wider text-[#F5DEB3] uppercase transition-all duration-300 hover:bg-[#B7410E] hover:shadow-2xl"
				>
					Get Your Free Quote
				</a>
			</div>
		</div>
		<!-- Decorative bottom border -->
		<div class="absolute bottom-0 w-full">
			<svg viewBox="0 0 1440 120" class="w-full text-[#FFF8DC]">
				<path
					fill="currentColor"
					d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
				></path>
			</svg>
		</div>
	</div>

	<!-- Services Section -->
	<section class="bg-[#FFF8DC] pt-10 pb-20">
		<div class="container mx-auto px-4">
			<div class="mb-16 text-center">
				<h2 class="font-western text-5xl text-[#2C2C2C]">Our Ranch Services</h2>
				<div class="mx-auto mt-4 h-1 w-24 bg-[#8B4513]"></div>
				<p class="font-ranch mt-6 text-xl text-[#654321]">
					Honest work, fair prices, and water that flows true
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				{#each services as service}
					<div
						class="group relative overflow-hidden rounded-lg border-4 border-[#8B4513] bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
					>
						<div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
						<div class="relative p-8">
							<div
								class="{service.color} mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
							>
								<service.icon class="h-8 w-8 text-white" />
							</div>
							<h3 class="font-western mb-4 text-2xl text-[#2C2C2C]">{service.title}</h3>
							<p class="font-ranch leading-relaxed text-[#654321]">
								{service.description}
							</p>
						</div>
						<!-- Wood grain effect on hover -->
						<div
							class="absolute bottom-0 h-2 w-full bg-gradient-to-r from-[#8B4513] via-[#654321] to-[#8B4513] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Call to Action Banner -->
	<section class="relative bg-[#654321] py-16">
		<div class="absolute inset-0 opacity-20">
			<div
				class="h-full w-full"
				style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"
			></div>
		</div>
		<div class="relative container mx-auto px-4">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="font-western text-4xl text-[#F5DEB3]">Need Water? We'll Find It.</h2>
				<p class="font-ranch mt-4 text-xl text-[#D2B48C]">
					From new wells to repairs, we've got the tools and know-how to keep your water flowing.
				</p>
				<div
					class="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6"
				>
					<a
						href="mailto:contact@travisdrilling.ca"
						class="font-ranch flex items-center rounded-sm bg-[#8B0000] px-6 py-3 font-bold text-white transition-all hover:bg-[#B7410E]"
					>
						<Mail class="mr-2 h-5 w-5" />
						Email Us
					</a>
					<a
						href="tel:780-974-3184"
						class="font-ranch flex items-center rounded-sm border-2 border-[#F5DEB3] px-6 py-3 font-bold text-[#F5DEB3] transition-all hover:bg-[#F5DEB3] hover:text-[#654321]"
					>
						<Phone class="mr-2 h-5 w-5" />
						(780) 974-3184
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="bg-gradient-to-b from-[#FFF8DC] to-[#F5DEB3] pt-16 pb-20">
		<div class="container mx-auto px-4">
			<div class="mb-16 text-center">
				<h2 class="font-western text-5xl text-[#2C2C2C]">Meet the Crew</h2>
				<div class="mx-auto mt-4 h-1 w-24 bg-[#8B4513]"></div>
				<p class="font-rustic mt-6 text-xl text-[#654321] italic">
					The folks who make it all happen
				</p>
			</div>
			<div class="flex flex-wrap justify-center gap-12">
				{#each profiles as profile}
					<div class="group text-center">
						<div class="relative inline-block">
							<div
								class="absolute -inset-4 rounded-full border-4 border-dashed border-[#8B4513] opacity-50 transition-all duration-300 group-hover:rotate-45"
							></div>
							<img
								alt={profile.name}
								src={profile.imgSrc}
								class="h-40 w-40 rounded-full border-4 border-[#654321] object-cover shadow-xl transition-all duration-300 group-hover:scale-105"
							/>
						</div>
						<h3 class="font-western mt-6 text-2xl text-[#2C2C2C]">{profile.name}</h3>
						<p class="font-ranch text-[#8B4513]">{profile.role}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="relative overflow-hidden bg-gradient-to-b from-[#2C2C2C] to-[#1a1a1a] py-20">
		<!-- Decorative elements -->
		<div
			class="absolute top-0 left-0 h-64 w-64 -translate-x-32 -translate-y-32 rounded-full bg-[#8B4513] opacity-10"
		></div>
		<div
			class="absolute right-0 bottom-0 h-96 w-96 translate-x-48 translate-y-48 rounded-full bg-[#B87333] opacity-10"
		></div>

		<div class="relative container mx-auto px-4">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="font-western text-5xl text-[#F5DEB3]">Our Story</h2>
				<div class="mx-auto my-6 h-1 w-24 bg-[#8B4513]"></div>
				<p class="font-ranch mt-8 text-xl leading-relaxed text-[#D2B48C]">
					Travis Drilling has been serving the good folks of Onoway and beyond for generations.
					We're not just drilling wells – we're helping families and farms thrive with reliable
					water access.
				</p>
				<p class="font-rustic mt-6 text-2xl text-[#F5DEB3] italic">
					"Family owned, locally grown, and proud to call Alberta home"
				</p>
				<div class="mt-10 flex justify-center">
					<div class="rounded-lg border-2 border-[#8B4513] bg-[#654321]/20 px-8 py-4">
						<p class="font-ranch text-lg text-[#F5DEB3]">Licensed • Insured • Experienced</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
