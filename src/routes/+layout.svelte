<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import 'lenis/dist/lenis.css';
	import { trackPageLoad } from '$lib/utils/analytics';
	
	let { children } = $props();

	onMount(() => {
		// Track page load
		trackPageLoad();

		// Initialize Lenis for ultra-smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
			infinite: false,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		// Enhanced smooth scrolling for anchor links with Lenis
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
			
			if (anchor && anchor.hash) {
				e.preventDefault();
				const targetId = anchor.hash.slice(1);
				const targetElement = document.getElementById(targetId);
				
				if (targetElement) {
					lenis.scrollTo(targetElement, {
						offset: -80,
						duration: 1.5,
					});

					// Update URL without jumping
					history.pushState(null, '', anchor.hash);
				}
			}
		};

		document.addEventListener('click', handleAnchorClick);

		return () => {
			document.removeEventListener('click', handleAnchorClick);
			lenis.destroy();
		};
	});
</script>

<svelte:head>
	<link rel="icon" href="https://i0.wp.com/tedxankara.com/wp-content/uploads/2018/01/cropped-favicon-1.png" />
	
	<!-- Primary Meta Tags -->
	<title>TEDxNorthSouthUniversity 2025 - The Future of Entrepreneurship</title>
	<meta name="title" content="TEDxNorthSouthUniversity 2025 - The Future of Entrepreneurship" />
	<meta name="description" content="Join us on December 6, 2025, for TEDxNorthSouthUniversity. Explore the future of entrepreneurship in Bangladesh's digital economy. Innovation, technology, and ambition converge." />
	<meta name="keywords" content="TEDx, TEDxNSU, North South University, Entrepreneurship, Digital Economy, Bangladesh, Innovation, Technology, Event 2025" />
	<meta name="author" content="TEDxNorthSouthUniversity" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://tedxnorthsouthuniversity.com/" />
	<meta property="og:title" content="TEDxNorthSouthUniversity 2025 - The Future of Entrepreneurship" />
	<meta property="og:description" content="Join us on December 6, 2025, for TEDxNorthSouthUniversity. Explore the future of entrepreneurship in Bangladesh's digital economy. Innovation, technology, and ambition converge." />
	<meta property="og:image" content="https://tedxnorthsouthuniversity.com/logo-white.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="TEDxNorthSouthUniversity Logo" />
	<meta property="og:site_name" content="TEDxNorthSouthUniversity" />
	<meta property="og:locale" content="en_US" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://tedxnorthsouthuniversity.com/" />
	<meta name="twitter:title" content="TEDxNorthSouthUniversity 2025 - The Future of Entrepreneurship" />
	<meta name="twitter:description" content="Join us on December 6, 2025, for TEDxNorthSouthUniversity. Explore the future of entrepreneurship in Bangladesh's digital economy." />
	<meta name="twitter:image" content="https://tedxnorthsouthuniversity.com/logo-white.png" />
	<meta name="twitter:image:alt" content="TEDxNorthSouthUniversity Logo" />
	
	<!-- LinkedIn -->
	<meta property="og:image:secure_url" content="https://tedxnorthsouthuniversity.com/logo-white.png" />
	
	<!-- Additional Meta Tags -->
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />
	
	<!-- Event Schema.org structured data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Event",
			"name": "TEDxNorthSouthUniversity 2025",
			"description": "The Future of Entrepreneurship in Bangladesh's Digital Economy",
			"startDate": "2025-12-06T10:00:00+06:00",
			"endDate": "2025-12-06T18:00:00+06:00",
			"eventStatus": "https://schema.org/EventScheduled",
			"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
			"location": {
				"@type": "Place",
				"name": "North South University",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Dhaka",
					"addressCountry": "BD"
				}
			},
			"image": "https://tedxnorthsouthuniversity.com/logo-white.png",
			"organizer": {
				"@type": "Organization",
				"name": "TEDxNorthSouthUniversity",
				"url": "https://tedxnorthsouthuniversity.com"
			}
		}
	</script>
</svelte:head>

{@render children()}
