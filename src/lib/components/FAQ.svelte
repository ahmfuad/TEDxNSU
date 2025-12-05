<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	const faqs = [
		{
			question: 'What is TEDxNorthSouthUniversity?',
			answer: 'It\'s an independently organized TEDx event hosted at North South University, created to share ideas, stories, and experiences that inspire and spark meaningful conversations within the NSU community.',
			open: false
		},
		{
			question: 'What is the theme for this year\'s TEDxNorthSouthUniversity?',
			answer: 'The theme for this year is "The Future of Entrepreneurship in Bangladesh\'s Digital Economy."',
			open: false
		},
		{
			question: 'When and where is the event happening?',
			answer: 'The event will take place on December 6, 2025, at the Main Auditorium of North South University. Gates open at 9:00 AM, and the event starts at 9:30 AM.',
			open: false
		},
		{
			question: 'Who can attend?',
			answer: 'NSU students and alumni are eligible to attend. Students can purchase tickets at BDT 499, and alumni tickets are priced at BDT 699.',
			open: false
		},
		{
			question: 'What are the ticket prices and availability?',
			answer: 'Student tickets are BDT 499 (700 tickets available) and Alumni tickets are BDT 699 (100 tickets available). This is a single ticket for the whole day event.',
			open: false
		},
		{
			question: 'What is the event schedule?',
			answer: 'Gates open at 9:00 AM, event starts at 9:30 AM. Session 1 begins at 10:00 AM. Lunch break is from 1:00 PM to 2:00 PM. Gates reopen at 2:00 PM, and Session 2 starts at 2:30 PM.',
			open: false
		},
		{
			question: 'How many sessions will there be?',
			answer: 'The event will have two sessions with five speakers in each session, totaling 10 speakers throughout the day.',
			open: false
		},
		{
			question: 'Do I need to register, and is there an entry fee?',
			answer: 'Yes. Registration is required, and seats are limited. You can book your tickets online. Student tickets cost BDT 499 and Alumni tickets cost BDT 699.',
			open: false
		},
		{
			question: 'When does the registration start?',
			answer: 'Registration starts on December 1st, running till December 4th, but registration may be closed early if all seats are booked.',
			open: false
		},
		{
			question: 'Will there be any refreshments?',
			answer: 'Yes. Refreshments will be provided.',
			open: false
		},
		{
			question: 'Will the speaker list be announced before the event?',
			answer: 'Yes. Speakers will be revealed one by one through our announcements.',
			open: false
		},
		{
			question: 'Will the talks be recorded?',
			answer: 'Yes. The sessions will be recorded and later published on YouTube.',
			open: false
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" class="section-padding bg-dark-bg">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-16">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
				Frequently Asked <span class="text-ted-red">Questions</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto mb-4"></div>
			<p class="text-lg text-gray-400">Everything you need to know about TEDxNorthSouthUniversity</p>
		</div>

		<!-- FAQ Grid - Two Columns on Desktop -->
		<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
			{#each faqs as faq, index}
				<div class="bg-dark-card border border-gray-800 rounded-sm overflow-hidden hover:border-ted-red/50 transition-colors">
					<button
						class="w-full p-6 flex items-start justify-between text-left group transition-colors text-white"
						onclick={() => toggle(index)}
					>
						<h3 class="text-lg md:text-xl font-bold pr-6 group-hover:text-ted-red transition-colors">
							{faq.question}
						</h3>
						<div class="shrink-0 mt-1 transform transition-transform duration-300 {openIndex === index ? 'rotate-180' : ''}">
							<ChevronDown class="w-5 h-5 text-ted-red" />
						</div>
					</button>
					
					<div 
						class="overflow-hidden transition-all duration-300 {openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}"
					>
						<p class="px-6 text-base text-gray-400 leading-relaxed">
							{faq.answer}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Additional Help Section -->
		<div class="mt-16 text-center space-y-4">
			<p class="text-lg text-gray-400">
				Still have questions?
			</p>
			<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
				<a 
					href="https://www.facebook.com/NSUBusinessAnalyticsClub" 
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 text-ted-red hover:underline font-semibold"
				>
					<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
					Visit our Facebook page
				</a>
				<span class="text-gray-600">or</span>
				<a 
					href="mailto:tedxnorthsouthuniversity25@gmail.com"
					class="inline-flex items-center gap-2 text-ted-red hover:underline font-semibold"
				>
					Email us directly
				</a>
			</div>
			
			<!-- Book Ticket CTA -->
			<div class="pt-8">
				<a 
					href="https://www.tickettomorrow.com/event/tedxnsu"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-block bg-ted-red hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
				>
					Book Your Ticket Now
				</a>
			</div>
		</div>
	</div>
</section>
