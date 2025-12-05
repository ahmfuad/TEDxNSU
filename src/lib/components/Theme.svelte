<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import { trackRegClick } from '$lib/utils/analytics';

	function handleRegClick(e: Event) {
		trackRegClick();
	}
</script>

<section id="theme" class="section-padding bg-black relative overflow-hidden">
	<!-- Background Image (Mobile Only) -->
	<div class="absolute inset-0 opacity-30 lg:hidden">
		<img 
			src="/event-theme.png" 
			alt="The Future of Entrepreneurship in Bangladesh's Digital Economy" 
			class="w-full h-full object-cover object-center"
		/>
	</div>

	<div class="container-custom relative z-10">
		<div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
			<!-- Left Side: All Content -->
			<div class="space-y-8">
				<!-- Event Theme Label -->
				<div class="inline-block">
					<p class="text-white/80 text-lg font-medium tracking-wide">Event Theme</p>
				</div>

				<!-- Main Heading (3 rows on all devices) -->
				<h2 class="text-3xl md:text-4xl lg:text-4xl font-bold leading-tight text-white">
					<span class="block">The Future of Entrepreneurship</span>
					<!-- <span class="block">Entrepreneurship</span> -->
					<span class="block">in Bangladesh's Digital Economy</span>
				</h2>

				<!-- Subheading -->
				<p class="text-lg md:text-xl text-white/70 font-light">
					Exploring innovation within Bangladesh's rapidly evolving digital landscape.
				</p>

				<!-- Description -->
				<p class="text-base md:text-lg text-white/60 leading-relaxed">
					Bangladesh stands at a junction where technology, creativity, and ambition converge. This year's TEDx theme examines how digital transformation is redefining entrepreneurship — from fintech and smart commerce to AI-powered solutions and local-to-global scalability. Our speakers will highlight the challenges, opportunities, and revolutionary ideas driving the nation's next wave of innovators.
				</p>

			<!-- CTA Button -->
			<div class="pt-4">
				<a 
					href="https://www.tickettomorrow.com/event/tedxnsu"
					target="_blank"
					rel="noopener noreferrer"
					onclick={handleRegClick}
					class="inline-flex items-center gap-3 bg-ted-red hover:bg-ted-red/90 text-white font-bold text-md px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ted-red/50 group"
				>
					Secure Your Seat
					<ArrowRight class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
				</a>
			</div>
		</div>			<!-- Right Side: Full Image (Desktop Only) -->
			<div class="hidden lg:block">
				<img 
					src="/event-theme.png" 
					alt="The Future of Entrepreneurship in Bangladesh's Digital Economy" 
					class="w-full h-auto object-contain"
				/>
			</div>
		</div>
	</div>
</section>
