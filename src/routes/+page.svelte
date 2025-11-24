<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Theme from '$lib/components/Theme.svelte';
	import Speakers from '$lib/components/Speakers.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Venue from '$lib/components/Venue.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Team from '$lib/components/Team.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>TEDxNorthSouthUniversity 2025 | Ideas Worth Spreading</title>
	<meta name="description" content="Join us for TEDxNorthSouthUniversity on 6 December 2025. An independently organized TEDx event featuring inspiring talks and ideas worth spreading." />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
</svelte:head>

<Navigation />

<main class="overflow-x-hidden">
	<Hero />
	<About />
	<Theme />
	<Speakers />
	<Schedule />
	<Venue />
	<Sponsors />
	<Team />
	<FAQ />
	<Footer />
</main>
