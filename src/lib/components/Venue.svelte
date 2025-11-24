<script lang="ts">
	import { MapPin, Car, Clock, Info } from 'lucide-svelte';
</script>

<section id="venue" class="section-padding bg-[#0a0a0a]">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
				<span class="text-ted-red">Venue</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto"></div>
		</div>

		<div class="grid lg:grid-cols-2 gap-12">
			<!-- Map -->
			<div class="order-2 lg:order-1">
				<div class="aspect-video bg-gray-900 rounded-none overflow-hidden shadow-lg">
					<!-- Placeholder for Google Map -->
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9064697067427!2d90.40807931498174!3d23.74961698458859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sNorth%20South%20University!5e0!3m2!1sen!2sbd!4v1234567890123"
						width="100%"
						height="100%"
						style="border:0;"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="North South University Location"
					></iframe>
				</div>
			</div>

			<!-- Venue Details -->
			<div class="order-1 lg:order-2 space-y-8">
				<div>
					<h3 class="text-3xl md:text-4xl font-bold mb-4 text-white">
						North South University
					</h3>
					<p class="text-lg text-gray-400 mb-6">
						Bashundhara, Dhaka 1229, Bangladesh
					</p>
				</div>

				<!-- Helpful Information -->
				<div class="space-y-6">
					<div class="flex gap-4">
						<div class="shrink-0">
							<div class="w-12 h-12 bg-ted-red rounded-full flex items-center justify-center">
								<MapPin class="w-6 h-6 text-white" />
							</div>
						</div>
						<div>
							<h4 class="font-bold text-lg mb-2 text-white">Entry Gate</h4>
							<p class="text-gray-400">
								Main entrance through Gate 1. Event signage will guide you to the auditorium.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="shrink-0">
							<div class="w-12 h-12 bg-ted-red rounded-full flex items-center justify-center">
								<Car class="w-6 h-6 text-white" />
							</div>
						</div>
						<div>
							<h4 class="font-bold text-lg mb-2 text-white">Parking</h4>
							<p class="text-gray-400">
								Ample parking available on campus. Follow parking attendant instructions.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="shrink-0">
							<div class="w-12 h-12 bg-ted-red rounded-full flex items-center justify-center">
								<Clock class="w-6 h-6 text-white" />
							</div>
						</div>
						<div>
							<h4 class="font-bold text-lg mb-2 text-white">Arrival Time</h4>
							<p class="text-gray-400">
								Please arrive by 9:00 AM for registration. Doors open at 8:30 AM.
							</p>
						</div>
					</div>

					<div class="flex gap-4">
						<div class="shrink-0">
							<div class="w-12 h-12 bg-ted-red rounded-full flex items-center justify-center">
								<Info class="w-6 h-6 text-white" />
							</div>
						</div>
						<div>
							<h4 class="font-bold text-lg mb-2 text-white">Important Note</h4>
							<p class="text-gray-400">
								Please bring your registration confirmation. Valid ID required for entry.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
