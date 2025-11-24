<script lang="ts">
	const team = [
		{
			name: 'Alex Johnson',
			role: 'Organizer',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=AJ'
		},
		{
			name: 'Maria Garcia',
			role: 'Co-organizer',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=MG'
		},
		{
			name: 'Ryan Lee',
			role: 'Curator',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=RL'
		},
		{
			name: 'Priya Sharma',
			role: 'Curator',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=PS'
		},
		{
			name: 'Omar Hassan',
			role: 'Experience Lead',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=OH'
		},
		{
			name: 'Emma Wilson',
			role: 'Marketing Lead',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=EW'
		},
		{
			name: 'David Chen',
			role: 'Logistics Lead',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=DC'
		},
		{
			name: 'Sophie Turner',
			role: 'Communications Lead',
			image: 'https://via.placeholder.com/300x300/000000/E62B1E?text=ST'
		}
	];
</script>

<section class="section-padding bg-ted-black text-white">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
				Organizing <span class="text-ted-red">Team</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto"></div>
		</div>

		<!-- Team Grid -->
		<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
			{#each team as member}
				<div class="text-center group">
					<!-- Photo -->
					<div class="aspect-square mb-6 overflow-hidden bg-gray-800">
						<img 
							src={member.image} 
							alt={member.name}
							class="w-full h-full object-cover grayscale group-hover:grayscale-0 
							       transform group-hover:scale-105 transition-all duration-500"
						/>
					</div>
					
					<!-- Info -->
					<h3 class="text-xl font-bold mb-2">
						{member.name}
					</h3>
					<p class="text-ted-red uppercase text-sm font-semibold tracking-wider">
						{member.role}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
