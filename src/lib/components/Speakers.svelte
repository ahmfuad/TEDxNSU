<script lang="ts">
	// Sample speaker data - replace with actual data
	const speakers = [
		{
			name: 'Dr. Sarah Chen',
			title: 'The Future of Sustainable Technology',
			bio: 'Exploring how emerging technologies can address climate challenges and create a sustainable future.',
			image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=SC'
		},
		{
			name: 'James Morrison',
			title: 'Redefining Urban Spaces',
			bio: 'A new perspective on how architecture and community design can transform cities for the better.',
			image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=JM'
		},
		{
			name: 'Amina Rahman',
			title: 'Breaking Barriers in Education',
			bio: 'How inclusive education systems can unlock potential and create opportunities for all.',
			image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=AR'
		},
		{
			name: 'Prof. Michael Zhang',
			title: 'The Art of Scientific Discovery',
			bio: 'Unveiling the creative process behind groundbreaking research and innovation.',
			image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=MZ'
		},
		{
			name: 'Sophia Patel',
			title: 'Digital Ethics in AI',
			bio: 'Navigating the moral landscape of artificial intelligence and its impact on society.',
			image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=SP'
		},
		{
			name: 'David Kim',
			title: 'Music as Universal Language',
			bio: 'Exploring how music transcends boundaries and connects cultures across the globe.',
			image: 'https://via.placeholder.com/400x400/000000/E62B1E?text=DK'
		}
	];
</script>

<section id="speakers" class="section-padding bg-[#0a0a0a]">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">
				Speaker <span class="text-ted-red">Lineup</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto"></div>
		</div>

		<!-- Speaker Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
			{#each speakers as speaker}
				<div class="group bg-[#1a1a1a] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-ted-red/20 border border-gray-900">
					<!-- Speaker Image -->
					<div class="aspect-square overflow-hidden bg-gray-900">
						<img 
							src={speaker.image} 
							alt={speaker.name}
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
					</div>
					
					<!-- Speaker Info -->
					<div class="p-6 space-y-3">
						<h3 class="text-2xl font-bold tracking-tight text-white">
							{speaker.name}
						</h3>
						<h4 class="text-lg font-semibold text-ted-red uppercase tracking-wide">
							{speaker.title}
						</h4>
						<p class="text-gray-400 leading-relaxed">
							{speaker.bio}
						</p>
					</div>

					<!-- Accent bar -->
					<div class="h-1 bg-ted-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
				</div>
			{/each}
		</div>
	</div>
</section>
