<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { trackRegClick } from '$lib/utils/analytics';
	
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function handleRegClick() {
		trackRegClick();
		closeMenu();
	}

	function handleDesktopRegClick(e: Event) {
		trackRegClick();
	}

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const navLinks = [
		// { href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#theme', label: 'Theme' },
		{ href: '#speakers', label: 'Speakers' },
		// { href: '#schedule', label: 'Schedule' },
		{ href: '#venue', label: 'Venue' },
		// { href: '#sponsors', label: 'Sponsors' },
		{ href: '#faq', label: 'FAQ' }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-black/70 backdrop-blur-xl shadow-lg' : 'bg-transparent backdrop-blur-sm'}">
	<div class="container-custom">
		<div class="flex items-center justify-between py-4 md:py-6">
			<!-- Logo -->
			<a href="#home" class="flex items-center gap-2 transition-opacity {scrolled ? 'opacity-100' : 'opacity-90'}">
				<img src="/logo-white.png" alt="TEDxNSU Logo" class="h-12 md:h-14 w-auto" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-8">
				{#each navLinks as link}
					<a 
						href={link.href} 
						class="text-white hover:text-ted-red transition-colors font-medium text-sm uppercase tracking-wider {scrolled ? '' : 'drop-shadow-lg'}"
					>
						{link.label}
					</a>
			{/each}
			<a 
				href="https://www.tickettomorrow.com/event/tedxnsu" 
				target="_blank"
				rel="noopener noreferrer"
				onclick={handleDesktopRegClick}
				class="btn-primary text-sm px-6 py-3"
			>
				Book Ticket
			</a>
		</div>			<!-- Mobile Menu Button -->
			<button 
				onclick={toggleMenu}
				class="lg:hidden p-2 text-white hover:text-ted-red transition-colors {scrolled ? '' : 'drop-shadow-lg'}"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="lg:hidden bg-black/80 backdrop-blur-md border-t border-gray-800">
			<div class="container-custom py-6">
				<div class="flex flex-col gap-4">
					{#each navLinks as link}
						<a 
							href={link.href} 
							onclick={closeMenu}
							class="text-white hover:text-ted-red transition-colors font-medium uppercase tracking-wider py-2"
						>
							{link.label}
						</a>
					{/each}
					<a 
						href="https://www.tickettomorrow.com/event/tedxnsu" 
						target="_blank"
						rel="noopener noreferrer"
						onclick={handleRegClick} 
						class="btn-primary text-center mt-4"
					>
						Book Ticket
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>
