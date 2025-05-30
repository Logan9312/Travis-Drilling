<script lang="ts">
	import {
		Droplets,
		Mail,
		Phone,
		Shovel,
		Wrench,
		Tractor,
		Shield,
		CheckCircle,
		Star,
		ChevronRight,
		Hammer
	} from 'lucide-svelte';

	const profiles = [
		{
			name: 'Jason Travis',
			imgSrc: '/img/blank.png',
			title: 'Owner & Lead Driller',
			role: '20+ Years Experience'
		},
		{
			name: 'Christy Travis',
			imgSrc: '/img/blank.png',
			title: 'Office Manager',
			role: 'Customer Relations Expert'
		},
		{
			name: 'Hayden Borle',
			imgSrc: '/img/blank.png',
			title: 'Field Technician',
			role: 'Equipment Specialist'
		}
	];

	const services = [
		{
			title: 'Well Drilling',
			description:
				'State-of-the-art drilling equipment and techniques for residential and agricultural water wells.',
			icon: Hammer,
			features: ['New well installation', 'Deep well drilling', 'Precise location services']
		},
		{
			title: 'Maintenance & Repair',
			description:
				'Comprehensive well maintenance to ensure clean, reliable water supply for years to come.',
			icon: Wrench,
			features: ['Regular inspections', 'Pump repairs', 'Well rehabilitation']
		},
		{
			title: 'Specialized Services',
			description:
				'Advanced solutions including water testing, well shocking, and professional abandonment services.',
			icon: Droplets,
			features: ['Water quality testing', 'Well shocking', 'Proper abandonment']
		}
	];

	const stats = [
		{ value: '500+', label: 'Wells Drilled' },
		{ value: '25+', label: 'Years Experience' },
		{ value: '100%', label: 'Satisfaction Rate' },
		{ value: '24/7', label: 'Emergency Service' }
	];

	const values = [
		{
			title: 'Industry Leaders',
			description: 'Cutting-edge equipment and proven techniques for superior results.',
			icon: Tractor
		},
		{
			title: 'Licensed & Insured',
			description: 'Fully certified professionals with comprehensive insurance coverage.',
			icon: Shield
		},
		{
			title: 'Local Expertise',
			description: "Deep understanding of Alberta's unique geological conditions.",
			icon: Star
		}
	];
</script>

<div>
	<!-- Modern Hero Section with Parallax Effect -->
	<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
		<!-- Animated Background -->
		<div class="absolute inset-0 z-0">
			<div
				class="absolute inset-0 bg-[url('/img/rig_cropped.jpg')] bg-cover bg-center bg-no-repeat lg:bg-[url('/img/rig.jpg')]"
			></div>
			<div class="backdrop-overlay"></div>
			<div class="gradient-bg absolute inset-0 opacity-30"></div>
		</div>

		<!-- Floating particles effect -->
		<div class="absolute inset-0 overflow-hidden">
			<div
				class="float-animation absolute -top-10 -left-10 h-72 w-72 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl"
			></div>
			<div
				class="float-animation absolute -right-10 -bottom-10 h-96 w-96 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl"
				style="animation-delay: 3s;"
			></div>
		</div>

		<!-- Hero Content -->
		<div class="relative z-10 container mx-auto px-4 text-center">
			<div class="fade-in">
				<div class="modern-badge mb-6 inline-flex items-center gap-2">
					<CheckCircle class="h-4 w-4" />
					<span>Alberta's Trusted Water Well Experts</span>
				</div>

				<h1 class="mb-6 text-5xl leading-tight font-bold md:text-7xl">
					<span class="gradient-text-animate">Travis Drilling</span>
				</h1>

				<p
					class="mx-auto mb-8 max-w-3xl text-xl font-light text-[var(--color-text-secondary)] md:text-2xl"
				>
					Professional water well drilling and services with cutting-edge technology and decades of
					expertise
				</p>

				<div class="flex flex-col justify-center gap-4 sm:flex-row">
					<a href="/Contact" class="modern-button group inline-flex items-center gap-2">
						Get Free Quote
						<ChevronRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
					</a>
					<a href="/Services" class="modern-button-secondary inline-flex items-center gap-2">
						Explore Services
					</a>
				</div>

				<!-- Stats Bar -->
				<div class="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
					{#each stats as stat}
						<div class="modern-card hover-lift p-6">
							<div class="modern-header text-3xl font-bold">{stat.value}</div>
							<div class="mt-1 text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="pulse-animation absolute bottom-8 left-1/2 -translate-x-1/2">
			<div
				class="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 p-1"
			>
				<div class="h-2 w-0.5 animate-bounce rounded-full bg-white/50"></div>
			</div>
		</div>
	</section>

	<!-- Modern Services Section -->
	<section class="relative overflow-hidden py-24">
		<!-- Background decoration -->
		<div class="absolute top-0 left-0 h-full w-full opacity-5">
			<div class="absolute top-20 left-10 h-64 w-64 rounded-full bg-[var(--color-primary)]"></div>
			<div
				class="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[var(--color-accent)]"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-4">
			<div class="fade-in mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					<span class="modern-header">Our Services</span>
				</h2>
				<div class="modern-divider mx-auto mb-6 max-w-24"></div>
				<p class="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
					Comprehensive water well solutions tailored to your specific needs
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each services as service, i}
					<div class="modern-card hover-lift group p-8" style="animation-delay: {i * 0.1}s">
						<div class="icon-container mb-6 transition-transform group-hover:scale-110">
							<service.icon class="h-7 w-7" />
						</div>

						<h3 class="mb-4 text-2xl font-bold text-white">{service.title}</h3>
						<p class="mb-6 text-[var(--color-text-secondary)]">{service.description}</p>

						<ul class="mb-6 space-y-2">
							{#each service.features as feature}
								<li class="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
									<CheckCircle class="h-4 w-4 flex-shrink-0 text-[var(--color-success)]" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>

						<a
							href="/Services"
							class="inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] transition-all hover:gap-3"
						>
							Learn More
							<ChevronRight class="h-4 w-4" />
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Modern About Section -->
	<section class="relative overflow-hidden py-24">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div class="fade-in">
					<div class="modern-badge mb-6">Family-Owned Since 1998</div>

					<h2 class="mb-6 text-4xl font-bold md:text-5xl">
						<span class="modern-header">Built on Trust & Excellence</span>
					</h2>

					<p class="mb-8 text-lg leading-relaxed text-[var(--color-text-secondary)]">
						Travis Drilling combines traditional values with modern technology to deliver
						exceptional water well services throughout Alberta. Our commitment to quality and
						customer satisfaction has made us the region's most trusted drilling company.
					</p>

					<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
						{#each values as value}
							<div class="hover-lift flex items-start gap-4">
								<div class="icon-container flex-shrink-0">
									<value.icon class="h-6 w-6" />
								</div>
								<div>
									<h3 class="mb-2 text-xl font-bold text-white">{value.title}</h3>
									<p class="text-sm text-[var(--color-text-secondary)]">{value.description}</p>
								</div>
							</div>
						{/each}
					</div>

					<a href="/About" class="modern-button inline-flex items-center gap-2">
						Discover Our Story
						<ChevronRight class="h-5 w-5" />
					</a>
				</div>

				<div class="relative">
					<div class="modern-card shimmer overflow-hidden">
						<img
							src="/img/rig_original.jpg"
							alt="Travis Drilling Equipment"
							class="h-full w-full object-cover"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
						<div class="absolute right-6 bottom-6 left-6">
							<div class="modern-badge">
								<Star class="mr-1 h-4 w-4" />
								Industry Leaders in Water Well Technology
							</div>
						</div>
					</div>

					<!-- Decorative elements -->
					<div
						class="absolute -top-6 -right-6 -z-10 h-24 w-24 rounded-2xl bg-[var(--color-accent)] opacity-20"
					></div>
					<div
						class="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl bg-[var(--color-primary)] opacity-20"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Modern CTA Section -->
	<section class="relative overflow-hidden py-24">
		<div class="gradient-bg absolute inset-0 opacity-90"></div>
		<div class="absolute inset-0 bg-[url('/img/wood-texture.jpg')] opacity-5"></div>

		<div class="relative z-10 container mx-auto px-4 text-center">
			<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">
				Ready to Start Your Water Well Project?
			</h2>
			<p class="mx-auto mb-10 max-w-2xl text-xl text-white/80">
				Get expert consultation and a free quote for your drilling needs
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="tel:780-974-3184"
					class="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[var(--color-primary)] shadow-xl transition-transform hover:scale-105"
				>
					<Phone class="h-5 w-5" />
					Call (780) 974-3184
				</a>
				<a
					href="mailto:contact@travisdrilling.ca"
					class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20"
				>
					<Mail class="h-5 w-5" />
					Email Us Today
				</a>
			</div>
		</div>
	</section>

	<!-- Modern Team Section -->
	<section class="relative py-24">
		<div class="container mx-auto px-4">
			<div class="fade-in mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					<span class="modern-header">Meet Our Experts</span>
				</h2>
				<div class="modern-divider mx-auto mb-6 max-w-24"></div>
				<p class="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
					Dedicated professionals committed to delivering exceptional service
				</p>
			</div>

			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each profiles as profile, i}
					<div
						class="modern-card hover-lift group p-8 text-center"
						style="animation-delay: {i * 0.1}s"
					>
						<div class="relative mb-6 inline-block">
							<div
								class="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--color-accent)]/20 transition-colors group-hover:border-[var(--color-accent)]"
							>
								<img src={profile.imgSrc} alt={profile.name} class="h-full w-full object-cover" />
							</div>
							<div class="icon-container absolute -right-2 -bottom-2 h-10 w-10">
								<CheckCircle class="h-5 w-5" />
							</div>
						</div>

						<h3 class="mb-1 text-xl font-bold text-white">{profile.name}</h3>
						<p class="mb-2 font-semibold text-[var(--color-accent)]">{profile.title}</p>
						<p class="text-sm text-[var(--color-text-secondary)]">{profile.role}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	/* Custom animations for this page */
	.fade-in {
		animation: fadeIn 0.8s ease-out;
		animation-fill-mode: both;
	}
</style>
