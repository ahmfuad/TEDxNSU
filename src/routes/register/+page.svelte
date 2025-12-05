<script lang="ts">
	import { Calendar, MapPin, Clock } from 'lucide-svelte';
	import { onMount } from 'svelte';

	const GRID_SIZE = 30; // Increased from 20 to 30 for smaller boxes
	const RIPPLE_STEPS = 7;
	const MAX_RIPPLE_DISTANCE = 2;
	const RIPPLE_DELAY_MS = 60;
	const LOOP_INTERVAL_MS = 2000;

	let gridContainer: HTMLDivElement;
	let randomRippleInterval: number | null = null;
	let isLoopRunning = true;

	onMount(() => {
		initializeGrid();
		startRandomRippleLoop();

		return () => {
			if (randomRippleInterval) {
				clearInterval(randomRippleInterval);
			}
		};
	});

	function initializeGrid() {
		if (!gridContainer) return;

		for (let i = 0; i < GRID_SIZE; i++) {
			for (let j = 0; j < GRID_SIZE; j++) {
				const tile = document.createElement('div');
				tile.className = 'grid-tile';
				tile.setAttribute('data-row', i.toString());
				tile.setAttribute('data-col', j.toString());
				gridContainer.appendChild(tile);
			}
		}
	}

	function startRandomRippleLoop() {
		const allTiles = gridContainer?.querySelectorAll('.grid-tile');
		if (!allTiles || allTiles.length === 0) return;

		randomRippleInterval = window.setInterval(() => {
			const randomIndex = Math.floor(Math.random() * allTiles.length);
			const randomTile = allTiles[randomIndex] as HTMLElement;
			handleTileClick(randomTile);
		}, LOOP_INTERVAL_MS);

		isLoopRunning = true;
	}

	function handleTileClick(clickedTile: HTMLElement) {
		const centerRow = parseInt(clickedTile.getAttribute('data-row') || '0');
		const centerCol = parseInt(clickedTile.getAttribute('data-col') || '0');

		const xTiles = new Map<number, HTMLElement[]>();

		gridContainer?.querySelectorAll('.grid-tile').forEach((tile) => {
			const tileElement = tile as HTMLElement;
			const tileRow = parseInt(tileElement.getAttribute('data-row') || '0');
			const tileCol = parseInt(tileElement.getAttribute('data-col') || '0');

			const diffRow = Math.abs(tileRow - centerRow);
			const diffCol = Math.abs(tileCol - centerCol);

			const onPrimaryDiagonal = (tileRow - centerRow === tileCol - centerCol);
			const onAntiDiagonal = (tileRow - centerRow === -(tileCol - centerCol));

			if (onPrimaryDiagonal || onAntiDiagonal) {
				const distance = Math.max(diffRow, diffCol);

				if (distance > 0 && distance <= MAX_RIPPLE_DISTANCE) {
					if (!xTiles.has(distance)) {
						xTiles.set(distance, []);
					}
					xTiles.get(distance)?.push(tileElement);
				}
			}
		});

		clickedTile.className = 'grid-tile ripple-step-0';

		const sortedDistances = Array.from(xTiles.keys()).sort((a, b) => a - b);

		sortedDistances.forEach((distance, index) => {
			const tilesInRing = xTiles.get(distance) || [];
			const step = Math.min(index + 1, RIPPLE_STEPS - 1);
			const className = `ripple-step-${step}`;
			const delay = (distance + 1) * RIPPLE_DELAY_MS;

			setTimeout(() => {
				tilesInRing.forEach(tile => {
					tile.classList.add(className);
				});

				setTimeout(() => {
					tilesInRing.forEach(tile => {
						tile.classList.remove(className);
						tile.classList.add('ripple-reset');
					});

					setTimeout(() => {
						tilesInRing.forEach(tile => {
							tile.classList.remove('ripple-reset');
						});
					}, 1500);
				}, delay + 100);
			}, delay);
		});

		setTimeout(() => {
			clickedTile.classList.remove('ripple-step-0');
			clickedTile.classList.add('ripple-reset');
			setTimeout(() => {
				clickedTile.classList.remove('ripple-reset');
			}, 1500);
		}, RIPPLE_DELAY_MS + 100);
	}
</script>

<svelte:head>
	<title>Register - TEDxNorthSouthUniversity 2025</title>
	<meta name="description" content="Registration for TEDxNorthSouthUniversity on 6 December 2025 opens soon. Stay tuned!" />
</svelte:head>

<div class="min-h-screen bg-black relative overflow-hidden flex items-center justify-center py-20">
	<!-- X-Ripple Grid Background -->
	<div class="absolute inset-0 flex items-center justify-center overflow-hidden">
		<div bind:this={gridContainer} class="grid-container opacity-40"></div>
	</div>

	<!-- Fixed Home Button -->
	<a 
		href="/" 
		class="fixed top-4 left-4 md:top-6 md:left-6 z-50 inline-flex items-center gap-1.5 md:gap-2 bg-black/80 backdrop-blur-sm border border-ted-red/30 hover:border-ted-red text-white px-3 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 hover:scale-105 group text-sm md:text-base"
	>
		<svg class="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
		</svg>
		<span class="font-semibold">Home</span>
	</a>

	<!-- Content Overlay -->
	<div class="container-custom max-w-4xl relative z-10">
		<!-- Header with Logo -->
		<div class="text-center mb-12">
			<a href="/" class="inline-block mb-6">
				<img src="/logo-white.png" alt="TEDxNSU Logo" class="h-16 md:h-20 w-auto mx-auto" />
			</a>
			<h2 class="text-3xl md:text-4xl font-black text-white mb-3">
				Event <span class="text-ted-red">Registration</span>
			</h2>
			<p class="text-lg text-gray-400">
				6 December 2025 • AUDI 801, NSU
			</p>
		</div>

		<!-- Coming Soon Content -->
		<div class="text-center space-y-8 px-4">
			<!-- Icon -->
			<div class="flex justify-center">
				<div class="relative">
					<div class="absolute inset-0 bg-ted-red/20 rounded-full blur-2xl animate-pulse"></div>
					<div class="relative p-6 bg-linear-to-br from-ted-red to-red-700 rounded-full">
						<Clock class="w-12 h-12 md:w-16 md:h-16 text-white" />
					</div>
				</div>
			</div>

			<!-- Title -->
			<div class="space-y-4">
				<h3 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
					Registration <span class="text-ted-red">Opening Soon</span>
				</h3>
				<div class="w-24 h-1 bg-ted-red mx-auto"></div>
			</div>

			<!-- Event Info Cards -->
			<!-- <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12">
				<div class="bg-black/60 backdrop-blur-sm border border-ted-red/30 p-5 flex items-center gap-4 hover:border-ted-red transition-colors">
					<div class="p-3 bg-ted-red rounded-lg">
						<Calendar class="w-5 h-5 text-white" />
					</div>
					<div>
						<p class="text-xs text-gray-400 uppercase tracking-wider font-semibold">Event Date</p>
						<p class="text-base font-bold text-white">6 December 2025</p>
					</div>
				</div>
				
				<div class="bg-black/60 backdrop-blur-sm border border-ted-red/30 p-5 flex items-center gap-4 hover:border-ted-red transition-colors">
					<div class="p-3 bg-ted-red rounded-lg">
						<MapPin class="w-5 h-5 text-white" />
					</div>
					<div>
						<p class="text-xs text-gray-400 uppercase tracking-wider font-semibold">Venue</p>
						<p class="text-base font-bold text-white">AUDI 801, NSU</p>
					</div>
				</div>
			</div> -->

			<!-- Call to Action -->
			<div class="pt-8 space-y-6">
				<p class="text-base text-gray-300 font-semibold uppercase tracking-wider">
					Stay Updated
				</p>
				<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
					<a 
						href="https://www.facebook.com/NSUBusinessAnalyticsClub" 
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-3 bg-ted-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
						</svg>
						Follow on Facebook
					</a>
					<a 
						href="mailto:tedxnorthsouthuniversity25@gmail.com" 
						class="inline-flex items-center gap-3 bg-transparent border-2 border-ted-red text-ted-red hover:bg-ted-red hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
					>
						Email Us
					</a>
				</div>
			</div>

			<!-- Contact Info -->
			<div class="pt-8 space-y-4">
				<p class="text-gray-400 text-sm">
					Questions about registration?
				</p>
				<a href="mailto:tedxnorthsouthuniversity25@gmail.com" class="text-ted-red hover:underline text-sm font-semibold">
					tedxnorthsouthuniversity25@gmail.com
				</a>
			</div>
		</div>

		<!-- Back to Home (Mobile fallback) -->
		<div class="mt-12 text-center lg:hidden">
			<a href="/" class="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2">
				<span>←</span> Back to Home
			</a>
		</div>

		<!-- Footer - Technical Support -->
		<div class="mt-16 pt-8 border-t border-gray-800/50 text-center">
			<p class="text-gray-500 text-xs md:text-sm">
				Technical support by{' '}
				<a 
					href="https://factorite.com" 
					target="_blank" 
					rel="noopener noreferrer"
					class="text-ted-red hover:text-red-600 font-semibold transition-colors hover:underline"
				>
					Factorite
				</a>
			</p>
		</div>
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(30, minmax(0, 1fr));
		grid-template-rows: repeat(30, minmax(0, 1fr));
		width: 100vmax;
		height: 100vmax;
		min-width: 100vw;
		min-height: 100vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	:global(.grid-tile) {
		position: relative;
		background-color: #111111;
		transition: background-color 0.15s ease-out;
		cursor: pointer;
		user-select: none;
		border: none;
		aspect-ratio: 1 / 1;
	}

	/* Ripple effect classes (TEDx Red fading to black/dark gray) */
	:global(.ripple-step-0) { background-color: #E62B1E !important; transition: background-color 0.2s; }
	:global(.ripple-step-1) { background-color: #d1271b !important; transition: background-color 0.3s; }
	:global(.ripple-step-2) { background-color: #aa2116 !important; transition: background-color 0.4s; }
	:global(.ripple-step-3) { background-color: #8c1b12 !important; transition: background-color 0.5s; }
	:global(.ripple-step-4) { background-color: #61120b !important; transition: background-color 0.6s; }
	:global(.ripple-step-5) { background-color: #3d0c07 !important; transition: background-color 0.7s; }
	:global(.ripple-step-6) { background-color: #2a2a2a !important; transition: background-color 0.8s; }
	
	/* Reset back to original color (black) after ripple is complete */
	:global(.ripple-reset) { 
		background-color: #111111 !important;
		transition: background-color 1.5s ease-out; 
	}
</style>
