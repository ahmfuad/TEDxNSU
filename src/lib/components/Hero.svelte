<script lang="ts">
	import { Calendar, MapPin } from 'lucide-svelte';
</script>

<section id="home" class="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
	<!-- Subtle geometric background -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute top-20 right-20 w-96 h-96 border border-white rounded-full"></div>
		<div class="absolute bottom-20 left-20 w-64 h-64 border border-white"></div>
	</div>

	<div class="container-custom relative z-10">
		<div class="max-w-5xl mx-auto text-center space-y-12">
			<!-- Logo -->
			<!-- <div class="inline-block mb-8">
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
					<span class="text-ted-red">TED</span><span class="text-white">x</span><span class="text-white">NorthSouthUniversity</span>
				</h1>
			</div> -->

			<!-- Main Headline -->
			<h2 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
				Ideas Worth<br />Spreading
			</h2>

			<!-- Subheadline -->
			<p class="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-400">
				An independently organized TEDx event
			</p>

			<!-- Event Info -->
			<div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-8">
				<div class="flex items-center gap-4">
					<div class="p-3 bg-ted-red rounded-full">
						<Calendar class="w-6 h-6 text-white" />
					</div>
					<div class="text-left">
						<p class="text-sm font-semibold uppercase tracking-wider text-gray-500">Date</p>
						<p class="text-xl font-bold text-white">6 December 2025</p>
					</div>
				</div>

				<div class="hidden md:block w-px h-16 bg-gray-700"></div>

				<div class="flex items-center gap-4">
					<div class="p-3 bg-ted-red rounded-full">
						<MapPin class="w-6 h-6 text-white" />
					</div>
					<div class="text-left">
						<p class="text-sm font-semibold uppercase tracking-wider text-gray-500">Location</p>
						<p class="text-xl font-bold text-white">North South University</p>
					</div>
				</div>
			</div>

			<!-- CTA Button -->
			<!-- <div class="pt-8">
				<a href="/register" class="inline-block btn-primary rounded-none shadow-lg">
					Register Now
				</a>
			</div> -->
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<div class="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
			<div class="w-1 h-2 bg-ted-red rounded-full"></div>
		</div>
	</div>
</section>
