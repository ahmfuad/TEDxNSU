<script lang="ts">
	// Sample sponsor data - replace with actual sponsor logos
	const sponsors = [
		{ name: 'Sponsor 1', logo: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Sponsor+1' },
		{ name: 'Sponsor 2', logo: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Sponsor+2' },
		{ name: 'Sponsor 3', logo: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Sponsor+3' },
		{ name: 'Sponsor 4', logo: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Sponsor+4' },
		{ name: 'Sponsor 5', logo: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Sponsor+5' },
		{ name: 'Sponsor 6', logo: 'https://via.placeholder.com/200x100/FFFFFF/000000?text=Sponsor+6' }
	];
</script>

<section id="sponsors" class="section-padding bg-[#1a1a1a]">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
				Partners & <span class="text-ted-red">Sponsors</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto"></div>
		</div>

		<!-- Sponsor Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
			{#each sponsors as sponsor}
				<div class="aspect-video border-2 border-gray-800 flex items-center justify-center p-8 
				            hover:border-ted-red transition-colors duration-300 bg-[#0a0a0a] group">
					<img 
						src={sponsor.logo} 
						alt={sponsor.name}
						class="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
					/>
				</div>
			{/each}
		</div>

		<!-- Become a Sponsor CTA -->
		<div class="text-center mt-16">
			<p class="text-xl text-gray-400 mb-6">
				Interested in partnering with us?
			</p>
			<button class="btn-secondary rounded-none">
				Become a Sponsor
			</button>
		</div>
	</div>
</section>
