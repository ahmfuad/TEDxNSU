<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	const faqs = [
		{
			question: 'What is a TEDx event?',
			answer: 'TEDx events are local, self-organized gatherings that bring people together to share ideas worth spreading through TED-like experiences. Our event is independently organized under license from TED.',
			open: false
		},
		{
			question: 'How do I register for the event?',
			answer: 'Registration will open soon through our website. Click the "Register Now" button and fill out the registration form. Seats are limited, so early registration is recommended.',
			open: false
		},
		{
			question: 'Is there a registration fee?',
			answer: 'Yes, there is a nominal registration fee to cover event costs including venue, catering, and materials. The fee will be announced when registration opens.',
			open: false
		},
		{
			question: 'What should I bring to the event?',
			answer: 'Please bring your registration confirmation (digital or printed) and a valid ID. We also recommend bringing a notebook if you like to take notes during talks.',
			open: false
		},
		{
			question: 'Will food be provided?',
			answer: 'Yes, light refreshments will be provided during breaks, and lunch will be served during the lunch break. Please inform us of any dietary restrictions during registration.',
			open: false
		},
		{
			question: 'Can I apply to be a speaker?',
			answer: 'Speaker applications for this event have closed. However, you can follow our social media channels for announcements about future speaker opportunities.',
			open: false
		},
		{
			question: 'Will the talks be recorded?',
			answer: 'Yes, all talks will be professionally recorded and may be shared on the TEDx YouTube channel and our social media platforms after the event.',
			open: false
		},
		{
			question: 'What is the dress code?',
			answer: 'Smart casual attire is recommended. Dress comfortably as you\'ll be seated for extended periods during the talk sessions.',
			open: false
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section id="faq" class="section-padding bg-[#0a0a0a]">
	<div class="container-custom">
		<!-- Section Title -->
		<div class="text-center mb-20">
			<h2 class="text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
				<span class="text-ted-red">FAQ</span>
			</h2>
			<div class="w-24 h-1 bg-ted-red mx-auto"></div>
		</div>

		<!-- FAQ Accordion -->
		<div class="max-w-4xl mx-auto space-y-4">
			{#each faqs as faq, index}
				<div class="border-b border-gray-800 last:border-b-0">
					<button
						class="w-full py-6 flex items-center justify-between text-left group hover:text-ted-red transition-colors text-white"
						onclick={() => toggle(index)}
					>
						<h3 class="text-xl md:text-2xl font-bold pr-8">
							{faq.question}
						</h3>
						<div class="shrink-0 transform transition-transform duration-300 {openIndex === index ? 'rotate-180' : ''}">
							<ChevronDown class="w-6 h-6" />
						</div>
					</button>
					
					<div 
						class="overflow-hidden transition-all duration-300 {openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}"
					>
						<p class="text-lg text-gray-400 leading-relaxed">
							{faq.answer}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
