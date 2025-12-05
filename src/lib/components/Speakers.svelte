<script lang="ts">
	// Speaker data with real speakers and placeholders
	// To control the display order, change the 'order' property (lower numbers appear first)
	const speakersData = [
		{
			name: 'Sadia Haque',
			title: 'CEO & Founder',
			company: 'ShareTrip',
			bio: 'Leading the charge in digital travel innovation, transforming how Bangladesh experiences the world.',
			image: '/speaker1.jpg',
			revealed: true,
			order: 2 // Change this number to control position
		},
		{
			name: 'Hasnaeen Rizvi',
			title: 'CEO & Founder',
			company: 'AsthaIT',
			bio: 'Pioneering IT solutions and empowering businesses through innovative technology.',
			image: '/speaker2.jpg',
			revealed: true,
			order: 3 // Change this number to control position
		},
		{
			name: 'Rafayat Rakib',
			title: 'Founder',
			company: 'Digital Dropouts',
			bio: 'Redefining education and entrepreneurship for the digital age.',
			image: '/speaker3.jpg',
			revealed: true,
			order: 4 // Change this number to control position
		},
		{
			name: 'Ashik Chowdhury',
			title: 'Executive Chairman ',
			company: 'BIDA, BEZA, MIDA & CEO, PPPA',
			bio: 'Powering Bangladesh\'s investment momentum, advancing reforms that spark bold opportunities.',
			image: '/speaker4.jpg',
			revealed: true,
			order: 1 // Change this number to control position
		},
		{
			name: 'Al-Amin Sarker Tayef',
			title: 'Co-Founder & CEO',
			company: 'Barikoi',
			bio: 'Building Maps For Businesses in Emerging Markets and GCC',
			image: '/alamin.jpg',
			revealed: true,
			order: 5 // Change this number to control position
		},
		{
			name: 'Anusha Chowdhury',
			title: 'Co-Founder',
			company: 'Let\'s Talk Mental Health',
			bio: 'A celebrated mental health advocate championing youth wellbeing across Bangladesh and beyond.',
			image: '/speaker6.jpg',
			revealed: true,
			order: 6 // Change this number to control position
		},
		{
			name: 'Tajdin Hassan',
			title: 'COO',
			company: 'Keeron',
			bio: 'A purpose-driven strategist reshaping how Bangladesh tells its stories across media, marketing, and modern entrepreneurship.',
			image: '/speaker7.jpg',
			revealed: true,
			order: 7 // Change this number to control position
		},
		{
			name: 'Sumaiya Tasneem Haque',
			title: 'Lecturer',
			company: 'North South University',
			bio: 'A visionary whose inner strength turns barriers into bridges, shaping possibility for everyone. An exciting speaker announcement coming soon!',
			image: '/speaker8.jpg',
			revealed: true,
			order: 8 // Change this number to control position
		},
    {
			name: 'Mr. Mirza M. Ferdous',
			title: 'Senior Lecturer',
			company: 'North South University',
			bio: 'An educator and mentor shaping future leaders by bridging academic learning with real-world readiness and purposeful growth.',
			image: '/speaker9.png',
			revealed: true,
			order: 9 // Change this number to control position
		},
    {
			name: 'Mohammad Mukhlesur Rahman',
			title: 'Executive Coach & Corporate Strategist',
			company: '',
			bio: 'A transformative leadership coach and strategist empowering individuals and organizations to turn insight into meaningful, sustainable impact.',
			image: '/speaker10.png',
			revealed: true,
			order: 10 // Change this number to control position
		}
	];

	// Sort speakers by order property
	const speakers = [...speakersData].sort((a, b) => a.order - b.order);
</script>

<section id="speakers" class="section-padding bg-dark-bg">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">
				Speakers <span class="text-ted-red">Lineup</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto"></div>
		</div>

		<!-- Speaker Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
			{#each speakers as speaker}
				<div class="group bg-dark-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-ted-red/20 border border-gray-900 max-w-sm">
					<!-- Speaker Image -->
					<div class="aspect-square overflow-hidden bg-gray-900 relative">
						{#if speaker.revealed}
							<!-- Revealed speakers: bright on mobile, grayscale with hover brightness on desktop -->
							<img 
								src={speaker.image} 
								alt={speaker.name}
								class="w-full h-full object-cover transition-all duration-500 md:grayscale md:brightness-75 md:group-hover:grayscale-0 md:group-hover:brightness-100 md:group-hover:scale-110"
							/>
						{:else}
							<!-- Unrevealed speakers with red curtain -->
							<div class="w-full h-full relative bg-black flex items-center justify-center overflow-hidden">
								<!-- Curtain fabric texture -->
								<div class="absolute inset-0 bg-linear-to-b from-red-800 via-red-900 to-red-950"></div>
								
								<!-- Curtain folds (left) -->
								<div class="absolute inset-y-0 left-0 w-1/3">
									<div class="h-full bg-linear-to-r from-red-950 via-red-800 to-transparent opacity-60"></div>
								</div>
								
								<!-- Curtain folds (right) -->
								<div class="absolute inset-y-0 right-0 w-1/3">
									<div class="h-full bg-linear-to-l from-red-950 via-red-800 to-transparent opacity-60"></div>
								</div>
								
								<!-- Vertical drape lines -->
								<div class="absolute inset-0 opacity-30">
									<div class="h-full w-full" style="background: repeating-linear-gradient(90deg, transparent, transparent 15%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.3) 20%)"></div>
								</div>
								
								<!-- Center text -->
								<div class="relative z-10 text-center p-6">
									<p class="text-white font-bold text-xl mb-2 tracking-wide">Coming Soon</p>
									<!-- <p class="text-gray-300 text-sm">Speaker TBA</p> -->
								</div>
							</div>
						{/if}
					</div>
					
					<!-- Speaker Info -->
					<div class="p-6 space-y-3">
						<h3 class="text-2xl font-bold tracking-tight text-white">
							{speaker.name}
						</h3>
						<h4 class="text-lg font-semibold text-ted-red uppercase tracking-wide">
							{speaker.title}
							{#if speaker.company}
								<span class="block text-sm text-gray-400 normal-case mt-1">{speaker.company}</span>
							{/if}
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
