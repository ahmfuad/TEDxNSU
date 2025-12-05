<script lang="ts">
	import { Calendar, MapPin } from 'lucide-svelte';
	import { onMount, onDestroy } from 'svelte';
	import { trackRegClick } from '$lib/utils/analytics';

	function handleRegClick(e: Event) {
		trackRegClick();
	}

	// Event date
	const eventDate = new Date('2025-12-06T09:00:00').getTime();
	
	let countdown = $state({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	let prevCountdown = $state({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	let flipping = $state({
		days: false,
		hours: false,
		minutes: false,
		seconds: false
	});

	let digitFlipping = $state({
		days0: false,
		days1: false,
		hours0: false,
		hours1: false,
		minutes0: false,
		minutes1: false,
		seconds0: false,
		seconds1: false
	});

	let interval: number;

	function getDigits(num: number): [string, string] {
		const str = String(num).padStart(2, '0');
		return [str[0], str[1]];
	}

	function updateCountdown() {
		const now = new Date().getTime();
		const distance = eventDate - now;

		if (distance > 0) {
			const newCountdown = {
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
				minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
				seconds: Math.floor((distance % (1000 * 60)) / 1000)
			};

			// Check each digit individually
			const oldDaysDigits = getDigits(countdown.days);
			const newDaysDigits = getDigits(newCountdown.days);
			const oldHoursDigits = getDigits(countdown.hours);
			const newHoursDigits = getDigits(newCountdown.hours);
			const oldMinutesDigits = getDigits(countdown.minutes);
			const newMinutesDigits = getDigits(newCountdown.minutes);
			const oldSecondsDigits = getDigits(countdown.seconds);
			const newSecondsDigits = getDigits(newCountdown.seconds);

			// Trigger animation for changed digits
			if (oldDaysDigits[0] !== newDaysDigits[0]) {
				digitFlipping.days0 = true;
				setTimeout(() => digitFlipping.days0 = false, 600);
			}
			if (oldDaysDigits[1] !== newDaysDigits[1]) {
				digitFlipping.days1 = true;
				setTimeout(() => digitFlipping.days1 = false, 600);
			}
			if (oldHoursDigits[0] !== newHoursDigits[0]) {
				digitFlipping.hours0 = true;
				setTimeout(() => digitFlipping.hours0 = false, 600);
			}
			if (oldHoursDigits[1] !== newHoursDigits[1]) {
				digitFlipping.hours1 = true;
				setTimeout(() => digitFlipping.hours1 = false, 600);
			}
			if (oldMinutesDigits[0] !== newMinutesDigits[0]) {
				digitFlipping.minutes0 = true;
				setTimeout(() => digitFlipping.minutes0 = false, 600);
			}
			if (oldMinutesDigits[1] !== newMinutesDigits[1]) {
				digitFlipping.minutes1 = true;
				setTimeout(() => digitFlipping.minutes1 = false, 600);
			}
			if (oldSecondsDigits[0] !== newSecondsDigits[0]) {
				digitFlipping.seconds0 = true;
				setTimeout(() => digitFlipping.seconds0 = false, 600);
			}
			if (oldSecondsDigits[1] !== newSecondsDigits[1]) {
				digitFlipping.seconds1 = true;
				setTimeout(() => digitFlipping.seconds1 = false, 600);
			}

			countdown = newCountdown;
		} else {
			countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
		}
	}

	onMount(() => {
		updateCountdown();
		interval = setInterval(updateCountdown, 1000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<style>
	.flip-card {
		/* perspective: 1000px; */
		position: relative;
		overflow: hidden;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		/* transform-style: preserve-3d; */
		min-width: 70px;
		min-height: 70px;
	}

	@media (min-width: 768px) {
		.flip-card-inner {
			min-width: 90px;
			min-height: 90px;
		}
	}

	@media (min-width: 1024px) {
		.flip-card-inner {
			min-width: 85px;
			min-height: 85px;
		}
	}

	/* Flipping effect commented out */
	/* .flip-card.flipping .flip-card-inner {
		animation: flip 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
	}

	@keyframes flip {
		0% {
			transform: rotateX(0deg);
		}
		50% {
			transform: rotateX(90deg);
			opacity: 0.7;
		}
		100% {
			transform: rotateX(0deg);
		}
	} */

	/* Scroll-up digit animation */
	:global(.digit) {
		display: inline-block;
		transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
	}

	:global(.digit.scrolling) {
		animation: scrollUpDigit 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
	}

	@keyframes scrollUpDigit {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		50% {
			transform: translateY(-20px);
			opacity: 0;
		}
		51% {
			transform: translateY(20px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	/* Robotic line tracing effect */
	:global(.line-trace-effect::before) {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(234, 32, 39, 0.1) 25%,
			rgba(234, 32, 39, 0.3) 50%,
			rgba(234, 32, 39, 0.1) 75%,
			transparent 100%
		);
		animation: lineTrace 18s linear infinite;
		pointer-events: none;
		z-index: 1;
	}

	:global(.line-trace-effect::after) {
		content: '';
		position: absolute;
		top: -100%;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			180deg,
			transparent 0%,
			rgba(234, 32, 39, 0.1) 25%,
			rgba(234, 32, 39, 0.3) 50%,
			rgba(234, 32, 39, 0.1) 75%,
			transparent 100%
		);
		animation: lineTraceVertical 15s linear infinite;
		animation-delay: 1s;
		pointer-events: none;
		z-index: 1;
	}

	@keyframes lineTrace {
		0% {
			left: -100%;
			opacity: 1;
		}
		25% {
			left: 100%;
			opacity: 1;
		}
		25.01%, 100% {
			left: -100%;
			opacity: 0;
		}
	}

	/* @keyframes lineTraceVertical {
		0% {
			top: -100%;
		}
		100% {
			top: 100%;
		}
	} */
</style>

<section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<!-- Background Image - Layer 5 -->
	<div class="absolute inset-0" style="z-index: 5;">
		<img 
			src="/nsu-line-art.png" 
			alt="NSU Background" 
			class="mt-[450px] md:mt-[400px] w-full h-1/2 md:h-auto object-cover object-center"
			style="opacity: 0.6;"
		/>
	</div>

	<!-- Line Trace Effect - Layer 6 -->
	<div class="absolute inset-0 line-trace-effect pointer-events-none" style="z-index: 6;"></div>

	<!-- Content -->
	<div class="container mx-auto px-4 relative" style="z-index: 10;">
		<div class="max-w-5xl mx-auto text-center space-y-12 md:space-y-16 mt-32">
			
			<!-- Main Headline -->
			<!-- <h2 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white">
				Ideas Worth<br />Spreading
			</h2> -->
      <br>
			<!-- Subheadline -->
			<p class="text-xl md:text-2xl font-light tracking-wide uppercase text-gray-400 mb-8">
				An independently organized TEDx event
			</p>

			<!-- Countdown Timer -->
			<div class="pt-8 pb-2">
				<!-- Title with decorative lines -->
				<div class="flex items-center justify-center gap-6 mb-12">
					<div class="w-12 md:w-16 h-px bg-ted-red"></div>
					<p class="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-400 font-light whitespace-nowrap">Event Starts In</p>
					<div class="w-12 md:w-16 h-px bg-ted-red"></div>
				</div>
				
				<div class="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
					<!-- Days -->
					<div class="text-center">
						<div class="flip-card">
							<div class="flip-card-inner relative bg-dark-bg border border-gray-800 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center p-4">
								<p class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
									<span class="digit {digitFlipping.days0 ? 'scrolling' : ''}">{getDigits(countdown.days)[0]}</span><span class="digit {digitFlipping.days1 ? 'scrolling' : ''}">{getDigits(countdown.days)[1]}</span>
								</p>
								<!-- Corner accents - top left and bottom right -->
								<div class="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-ted-red"></div>
								<div class="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-ted-red"></div>
							</div>
						</div>
						<p class="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-3 font-light">Days</p>
					</div>

					<!-- Colon separator -->
					<div class="text-ted-red text-2xl md:text-3xl font-bold pb-6">:</div>

					<!-- Hours -->
					<div class="text-center">
						<div class="flip-card">
							<div class="flip-card-inner relative bg-dark-bg border border-gray-800 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center p-4">
								<p class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
									<span class="digit {digitFlipping.hours0 ? 'scrolling' : ''}">{getDigits(countdown.hours)[0]}</span><span class="digit {digitFlipping.hours1 ? 'scrolling' : ''}">{getDigits(countdown.hours)[1]}</span>
								</p>
								<!-- Corner accents - top left and bottom right -->
								<div class="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-ted-red"></div>
								<div class="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-ted-red"></div>
							</div>
						</div>
						<p class="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-3 font-light">Hours</p>
					</div>

					<!-- Colon separator -->
					<div class="text-ted-red text-2xl md:text-3xl font-bold pb-6">:</div>

					<!-- Minutes -->
					<div class="text-center">
						<div class="flip-card">
							<div class="flip-card-inner relative bg-dark-bg border border-gray-800 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center p-4">
								<p class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
									<span class="digit {digitFlipping.minutes0 ? 'scrolling' : ''}">{getDigits(countdown.minutes)[0]}</span><span class="digit {digitFlipping.minutes1 ? 'scrolling' : ''}">{getDigits(countdown.minutes)[1]}</span>
								</p>
								<!-- Corner accents - top left and bottom right -->
								<div class="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-ted-red"></div>
								<div class="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-ted-red"></div>
							</div>
						</div>
						<p class="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-3 font-light">Minutes</p>
					</div>

					<!-- Colon separator -->
					<div class="text-ted-red text-2xl md:text-3xl font-bold pb-6">:</div>

					<!-- Seconds -->
					<div class="text-center">
						<div class="flip-card">
							<div class="flip-card-inner relative bg-dark-bg border border-gray-800 w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center p-4">
								<p class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
									<span class="digit {digitFlipping.seconds0 ? 'scrolling' : ''}">{getDigits(countdown.seconds)[0]}</span><span class="digit {digitFlipping.seconds1 ? 'scrolling' : ''}">{getDigits(countdown.seconds)[1]}</span>
								</p>
								<!-- Corner accents - top left and bottom right -->
								<div class="absolute top-1.5 left-1.5 w-3 h-3 border-l-2 border-t-2 border-ted-red"></div>
								<div class="absolute bottom-1.5 right-1.5 w-3 h-3 border-r-2 border-b-2 border-ted-red"></div>
							</div>
						</div>
						<p class="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-gray-500 mt-3 font-light">Seconds</p>
					</div>
				</div>
			</div>

			<!-- Event Info -->
			<div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-6 pt-8 pb-8 md:pb-16">
				<!-- Date and Location Container - Side by side on mobile -->
				<div class="flex items-center justify-center gap-6 md:gap-6">
					<div class="flex items-center gap-3">
						<div class="p-2.5 md:p-3 bg-ted-red rounded-full">
							<Calendar class="w-5 h-5 md:w-6 md:h-6 text-white" />
						</div>
						<div class="text-left">
							<p class="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-gray-500">Date</p>
							<p class="text-sm md:text-xl font-bold text-white">6<sup>th</sup> December 2025</p>
						</div>
					</div>

					<!-- Vertical bar separator - visible on all screens -->
					<div class="w-px h-12 md:h-16 bg-gray-700"></div>

					<div class="flex items-center gap-3">
						<div class="p-2.5 md:p-3 bg-ted-red rounded-full">
							<MapPin class="w-5 h-5 md:w-6 md:h-6 text-white" />
						</div>
						<div class="text-left">
							<p class="text-[10px] md:text-sm font-semibold uppercase tracking-wider text-gray-500">Location</p>
							<p class="text-sm md:text-xl font-bold text-white">Main Auditorium</p>
						</div>
					</div>
		</div>
	</div>

	<!-- Book Ticket Button - Mobile Only -->
	<div class="md:hidden pb-12">
		<a 
			href="https://www.tickettomorrow.com/event/tedxnsu" 
			target="_blank"
			rel="noopener noreferrer"
			onclick={handleRegClick}
			class="inline-block bg-ted-red hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
		>
			Book Ticket
		</a>
	</div>		</div>
</div>	<!-- Scroll indicator -->
	<!-- <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
		<div class="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
			<div class="w-1 h-2 bg-ted-red rounded-full"></div>
		</div>
	</div> -->
</section>
