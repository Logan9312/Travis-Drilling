<script lang="ts">
	import {
		Droplets,
		Wrench,
		Shovel,
		Ruler,
		Gauge,
		ArrowRight,
		CheckCircle,
		Shield,
		Clock,
		Award,
		Hammer,
		TestTube,
		Phone,
		Star
	} from 'lucide-svelte';

	const services = [
		{
			id: 'drilling',
			title: 'Well Drilling',
			description:
				'State-of-the-art drilling technology and expertise for residential, agricultural and commercial water wells.',
			icon: Hammer,
			features: [
				'Advanced drilling equipment',
				'Expert site selection',
				'Deep & shallow well capabilities',
				'Complete well development'
			],
			highlight: 'Most Popular'
		},
		{
			id: 'maintenance',
			title: 'Maintenance & Repair',
			description:
				'Comprehensive maintenance and repair services to keep your water system running at peak performance.',
			icon: Wrench,
			features: [
				'Pump repairs & replacement',
				'System diagnostics',
				'Preventive maintenance',
				'24/7 emergency service'
			]
		},
		{
			id: 'testing',
			title: 'Water Testing',
			description:
				'Professional water quality testing and analysis to ensure your water meets health and safety standards.',
			icon: TestTube,
			features: [
				'Comprehensive water analysis',
				'Bacterial testing',
				'Chemical composition',
				'Treatment recommendations'
			]
		},
		{
			title: 'Well Shocking',
			description:
				'Effective well shocking treatments to eliminate bacteria and restore water quality.',
			icon: Droplets,
			features: [
				'Chlorine shock treatment',
				'Bacterial elimination',
				'System sanitization',
				'Follow-up testing'
			]
		},
		{
			title: 'Backhoe Services',
			description:
				'Professional excavation services for water line installation, trenching, and site preparation.',
			icon: Shovel,
			features: [
				'Water line trenching',
				'Underground utilities',
				'Site preparation',
				'Precision excavation'
			]
		},
		{
			title: 'Site Assessment',
			description:
				'Expert evaluation to determine optimal well placement and water availability on your property.',
			icon: Ruler,
			features: [
				'Hydrogeological survey',
				'Water table analysis',
				'Regulatory compliance',
				'Detailed reporting'
			]
		}
	];

	const processSteps = [
		{
			number: '01',
			title: 'Initial Consultation',
			description:
				'We discuss your needs and provide expert recommendations tailored to your property.',
			icon: Phone
		},
		{
			number: '02',
			title: 'Site Assessment',
			description: 'Our team evaluates your property to determine the best approach and location.',
			icon: Ruler
		},
		{
			number: '03',
			title: 'Service Execution',
			description: 'We complete the work using industry-leading equipment and techniques.',
			icon: Wrench
		},
		{
			number: '04',
			title: 'Quality Testing',
			description:
				'Thorough testing ensures everything meets our high standards and your satisfaction.',
			icon: CheckCircle
		},
		{
			number: '05',
			title: 'Ongoing Support',
			description:
				'We provide continued maintenance and support to keep your system running smoothly.',
			icon: Shield
		}
	];

	const benefits = [
		{ icon: Award, title: 'Licensed & Insured', description: 'Fully certified professionals' },
		{ icon: Clock, title: '24/7 Emergency', description: 'Available when you need us' },
		{ icon: Shield, title: 'Quality Guarantee', description: 'Satisfaction guaranteed' }
	];
</script>

<div class="min-h-screen">
	<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-background)] pt-32 pb-20"
	>
		<!-- Background decoration -->
		<div class="absolute inset-0 overflow-hidden">
			<div
				class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl"
			></div>
			<div
				class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl"
			></div>
		</div>

		<div class="relative z-10 container mx-auto px-4">
			<div class="fade-in text-center">
				<div class="modern-badge mb-6 inline-flex items-center gap-2">
					<Shield class="h-4 w-4" />
					<span>Professional Water Well Services</span>
				</div>

				<h1 class="mb-6 text-5xl font-bold md:text-6xl">
					<span class="modern-header">Our Services</span>
				</h1>

				<p class="mx-auto max-w-3xl text-xl leading-relaxed text-[var(--color-text-secondary)]">
					From new well installation to maintenance and repairs, we provide comprehensive water well
					solutions backed by decades of experience and cutting-edge technology.
				</p>
			</div>
		</div>
	</section>

	<!-- Services Grid -->
	<section class="relative py-20">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each services as service, i}
					<div
						class="modern-card hover-lift group relative p-8"
						style="animation-delay: {i * 0.1}s"
					>
						{#if service.highlight}
							<div class="modern-badge absolute -top-3 right-6">
								<Star class="mr-1 h-3 w-3" />
								{service.highlight}
							</div>
						{/if}

						<div class="icon-container mb-6 transition-transform group-hover:scale-110">
							<service.icon class="h-7 w-7" />
						</div>

						<h3 class="mb-4 text-2xl font-bold text-white">{service.title}</h3>
						<p class="mb-6 text-[var(--color-text-secondary)]">{service.description}</p>

						<ul class="mb-6 space-y-3">
							{#each service.features as feature}
								<li class="flex items-start gap-3">
									<CheckCircle class="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--color-success)]" />
									<span class="text-sm text-[var(--color-text-secondary)]">{feature}</span>
								</li>
							{/each}
						</ul>

						<a
							href="/Contact"
							class="group inline-flex items-center gap-2 font-semibold text-[var(--color-accent)] transition-all hover:gap-3"
						>
							Get Quote
							<ArrowRight class="h-4 w-4" />
						</a>
					</div>
				{/each}
			</div>

			<!-- Benefits Bar -->
			<div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each benefits as benefit}
					<div class="modern-card hover-lift p-6 text-center">
						<benefit.icon class="mx-auto mb-3 h-8 w-8 text-[var(--color-accent)]" />
						<h4 class="mb-1 font-bold text-white">{benefit.title}</h4>
						<p class="text-sm text-[var(--color-text-secondary)]">{benefit.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Process Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-b from-transparent via-[var(--color-surface)]/50 to-transparent py-20"
	>
		<!-- Animated background -->
		<div class="absolute inset-0">
			<div class="gradient-bg absolute inset-0 opacity-5"></div>
		</div>

		<div class="relative z-10 container mx-auto px-4">
			<div class="fade-in mb-16 text-center">
				<h2 class="mb-4 text-4xl font-bold md:text-5xl">
					<span class="modern-header">Our Process</span>
				</h2>
				<div class="modern-divider mx-auto mb-6 max-w-24"></div>
				<p class="mx-auto max-w-2xl text-lg text-[var(--color-text-secondary)]">
					A proven approach that ensures quality results every time
				</p>
			</div>

			<!-- Timeline -->
			<div class="relative mx-auto max-w-4xl">
				<!-- Vertical line -->
				<div
					class="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] md:left-1/2 md:-translate-x-1/2"
				></div>

				{#each processSteps as step, i}
					<div
						class="relative mb-12 flex items-center {i % 2 === 0
							? 'md:flex-row'
							: 'md:flex-row-reverse'}"
						style="animation-delay: {i * 0.1}s"
					>
						<!-- Number circle -->
						<div
							class="absolute left-8 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-lg font-bold text-white shadow-lg md:left-1/2 md:-translate-x-1/2"
						>
							{step.number}
						</div>

						<!-- Content -->
						<div
							class="ml-28 md:ml-0 md:w-1/2 {i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}"
						>
							<div class="modern-card hover-lift p-6">
								<div
									class="mb-3 flex items-center gap-3 {i % 2 === 0 ? 'md:flex-row-reverse' : ''}"
								>
									<step.icon class="h-6 w-6 text-[var(--color-accent)]" />
									<h3 class="text-xl font-bold text-white">{step.title}</h3>
								</div>
								<p class="text-[var(--color-text-secondary)]">{step.description}</p>
							</div>
						</div>

						<!-- Empty space for alternating layout -->
						<div class="hidden md:block md:w-1/2"></div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Service Area CTA -->
	<section class="relative overflow-hidden py-20">
		<div class="gradient-bg absolute inset-0 opacity-90"></div>

		<div class="relative z-10 container mx-auto px-4 text-center">
			<div class="modern-card mx-auto max-w-4xl p-12">
				<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">Serving Alberta Communities</h2>
				<p class="mx-auto mb-8 max-w-2xl text-lg text-[var(--color-text-secondary)]">
					Travis Drilling proudly serves Onoway and surrounding areas throughout Alberta. Contact us
					to confirm service availability in your location.
				</p>

				<div class="mx-auto mb-10 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
					<div class="text-center">
						<div class="modern-header text-2xl font-bold">Onoway</div>
					</div>
					<div class="text-center">
						<div class="modern-header text-2xl font-bold">Stony Plain</div>
					</div>
					<div class="text-center">
						<div class="modern-header text-2xl font-bold">Spruce Grove</div>
					</div>
					<div class="text-center">
						<div class="modern-header text-2xl font-bold">Edmonton Area</div>
					</div>
				</div>

				<a href="/Contact" class="modern-button inline-flex items-center gap-2">
					Request Your Free Quote
					<ArrowRight class="h-5 w-5" />
				</a>
			</div>
		</div>
	</section>
</div>

<style>
	/* Page-specific animations */
	.fade-in {
		animation: fadeIn 0.8s ease-out;
		animation-fill-mode: both;
	}
</style>
