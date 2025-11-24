<script lang="ts">
	const schedule = [
		{ time: '09:00 AM', title: 'Registration & Welcome Coffee', type: 'break' },
		{ time: '10:00 AM', title: 'Opening Ceremony', type: 'session' },
		{ time: '10:30 AM', title: 'Session 1: Innovation & Technology', type: 'session' },
		{ time: '11:45 AM', title: 'Coffee Break', type: 'break' },
		{ time: '12:00 PM', title: 'Session 2: Society & Culture', type: 'session' },
		{ time: '01:15 PM', title: 'Lunch Break', type: 'break' },
		{ time: '02:30 PM', title: 'Session 3: Science & Discovery', type: 'session' },
		{ time: '03:45 PM', title: 'Networking Break', type: 'break' },
		{ time: '04:00 PM', title: 'Session 4: Arts & Expression', type: 'session' },
		{ time: '05:15 PM', title: 'Closing Remarks & Networking', type: 'session' },
		{ time: '06:00 PM', title: 'Event Concludes', type: 'break' }
	];
</script>

<section id="schedule" class="section-padding bg-[#1a1a1a]">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
				Event <span class="text-ted-red">Schedule</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto mb-6"></div>
			<p class="text-xl text-gray-400">6 December 2025</p>
		</div>

		<!-- Timeline -->
		<div class="max-w-4xl mx-auto">
			<div class="space-y-0">
				{#each schedule as item, index}
					<div class="relative flex gap-8 pb-12 last:pb-0 group">
						<!-- Timeline line -->
						{#if index !== schedule.length - 1}
							<div class="absolute left-6 top-12 w-0.5 h-full bg-gray-800"></div>
					{/if}

					<!-- Time indicator -->
					<div class="shrink-0 relative z-10">
						<div class="w-12 h-12 rounded-full border-4 border-[#1a1a1a] bg-{item.type === 'break' ? 'gray-700' : 'ted-red'} 
						            flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
							{#if item.type === 'session'}
								<div class="w-3 h-3 bg-white rounded-full"></div>
							{/if}
						</div>
					</div>						<!-- Content -->
						<div class="flex-1 pb-8 border-b border-gray-800 last:border-0 transform group-hover:translate-x-2 transition-transform">
							<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
								<div>
									<p class="text-sm font-bold uppercase tracking-wider text-ted-red mb-2">
										{item.time}
									</p>
									<h3 class="text-xl md:text-2xl font-bold {item.type === 'break' ? 'text-gray-500' : 'text-white'}">
										{item.title}
									</h3>
								</div>
								{#if item.type === 'session'}
									<div class="shrink-0">
										<span class="inline-block px-4 py-2 bg-ted-red text-white text-xs font-bold uppercase tracking-wider">
											Talk Session
										</span>
									</div>
								{/if}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
