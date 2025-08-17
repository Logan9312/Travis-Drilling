<script lang="ts">
	import { Droplets, Mail, Phone, Shovel, Wrench } from 'lucide-svelte';

	const profiles = [
		{ name: 'Jason Travis', imgSrc: '/img/blank.png' },
		{ name: 'Christy Travis', imgSrc: '/img/blank.png' },
		{ name: 'Hayden Borle', imgSrc: '/img/blank.png' }
	];
</script>

<div>
	<div>
		<div style="background-image: url('/img/rig.jpg'); background-size: cover; background-position: bottom; background-repeat: no-repeat;">
			<span id="blackOverlay"></span>
		</div>
		<div>
			<div>
				<div>
					<h1>Travis Drilling LTD.</h1>
					<p>Water Well Drilling and Service</p>
				</div>
			</div>
		</div>
	</div>
	<section data-removed-class="-mt-12 bg-gray-300 pb-20 md:-mt-24">
		<div data-removed-class="container mx-auto px-4">
			<div data-removed-class="flex flex-wrap items-stretch">
				<div data-removed-class="w-full px-4 pt-6 text-center md:w-4/12 md:pt-12">
					<div
						data-removed-class="relative flex h-full w-full min-w-0 flex-col break-words rounded-xl bg-white shadow-lg"
					>
						<div data-removed-class="flex flex-auto flex-col items-center justify-center px-4 py-5">
							<div
								data-removed-class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg"
							>
								<Wrench data-removed-class="h-6 w-6" />
							</div>
							<div>
								<h6 data-removed-class="text-xl font-semibold">Drilling, Servicing, Testing</h6>
								<p data-removed-class="mb-4 mt-2 text-gray-600">
									For any of your agricultural or residential needs, we offer a journeyman service
									and repair technician with a variety of replacement parts.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div data-removed-class=" w-full px-4 pt-6 text-center md:w-4/12">
					<div
						data-removed-class="relative flex h-full w-full min-w-0 flex-col break-words rounded-xl bg-white shadow-lg"
					>
						<div data-removed-class="flex-auto px-4 py-5">
							<div
								data-removed-class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 p-3 text-center text-white shadow-lg"
							>
								<Droplets data-removed-class="h-6 w-6" />
							</div>
							<h6 data-removed-class="text-xl font-semibold">Abandonment, Shocking</h6>
							<p data-removed-class="mb-4 mt-2 text-gray-600">
								Well abandonment and decomissioning services are available for any unproductive
								wells.
							</p>
							<p data-removed-class="mb-4 mt-2 text-gray-600">
								Well maintenance and shocking services help to maintain a healthy and productive
								well.
							</p>
						</div>
					</div>
				</div>
				<!-- {/*TODO Discuss Servicing Area*/} -->
				<div data-removed-class="w-full px-4 pt-6 text-center md:w-4/12 md:pt-12">
					<div
						data-removed-class="relative flex h-full w-full min-w-0 flex-col break-words rounded-xl bg-white shadow-lg"
					>
						<div data-removed-class="flex flex-auto flex-col items-center justify-center px-4 py-5">
							<div
								data-removed-class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 p-3 text-center text-white shadow-lg"
							>
								<Shovel data-removed-class="h-6 w-6" />
							</div>

							<h6 data-removed-class="text-xl font-semibold">Backhoe Services</h6>
							<p data-removed-class="mb-4 mt-2 text-gray-600">
								Our backhoe service is available for trenching, installation and repair of
								underground water lines, and more.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div data-removed-class="mt-10 flex flex-wrap items-center">
				<div data-removed-class="ml-auto mr-auto w-full px-4 md:w-5/12">
					<h3 data-removed-class="mb-2 text-3xl font-semibold leading-normal">More Information</h3>
					<p data-removed-class="mb-4 mt-4 text-lg font-light leading-relaxed text-gray-700"></p>
					<p data-removed-class="mb-4 mt-0 text-lg font-light leading-relaxed text-gray-700">
						To discuss your drilling needs or to receive an estimate on services, you can contact us
						at the following:
					</p>
					<p data-removed-class="flex items-center text-gray-800">
						<Mail data-removed-class="mr-2 h-5 w-5" />
						<a href="mailto:contact@travisdrilling.ca">
							<span data-removed-class="mr-1 font-bold">Email: </span>
							contact@travisdrilling.ca
						</a>
					</p>
					<p data-removed-class="flex items-center text-gray-800">
						<Phone data-removed-class="mr-2 h-5 w-5" />
						<a href="tel:780-974-3184">
							<span data-removed-class="mr-1 font-bold">Phone: </span> (780) 974 - 3184
						</a>
					</p>
				</div>
			</div>
		</div>
	</section>

	<section data-removed-class="pb-20 pt-10">
		<div data-removed-class="container mx-auto justify-center px-4">
			<div data-removed-class="mb-24 flex flex-wrap justify-center text-center">
				<div data-removed-class="w-full px-4 lg:w-6/12">
					<h2 data-removed-class="text-4xl font-semibold">Our Team</h2>
				</div>
			</div>
			<div data-removed-class="flex flex-wrap justify-center">
				{#each profiles as profile}
					<div data-removed-class="mb-12 w-full px-4 md:w-6/12 lg:mb-0 lg:w-3/12">
						<div data-removed-class="px-6">
							<img
								alt={profile.name}
								src={profile.imgSrc}
								data-removed-class="mx-auto w-32 max-w-full rounded-full shadow-lg"
							/>
							<div data-removed-class="pt-6 text-center">
								<h5 data-removed-class="text-xl font-bold">{profile.name}</h5>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
	<section data-removed-class="relative block bg-gray-900 pb-20">
		<div data-removed-class="container mx-auto px-4 pt-20">
			<div data-removed-class="flex flex-wrap justify-center text-center">
				<div data-removed-class="w-full px-4 lg:w-7/12">
					<h2 data-removed-class="text-4xl font-semibold text-white">About Us</h2>
					<p data-removed-class="mb-4 mt-4 text-lg leading-relaxed text-gray-400">
						Travis Drilling is locally owned and operated in the Onoway area. We are dedicated to
						providing a professional water well drilling service.
					</p>4
				</div>
			</div>
		</div>
	</section>
</div>
