<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	
	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	function toggleMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			scrolled = window.scrollY > 50;
		});
	}

	const navLinks = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#theme', label: 'Theme' },
		{ href: '#speakers', label: 'Speakers' },
		{ href: '#schedule', label: 'Schedule' },
		{ href: '#venue', label: 'Venue' },
		{ href: '#sponsors', label: 'Sponsors' },
		{ href: '#faq', label: 'FAQ' }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}">
	<div class="container-custom">
		<div class="flex items-center justify-between py-4 md:py-6">
			<!-- Logo -->
			<a href="#home" class="text-2xl md:text-3xl font-black tracking-tight">
				<span class="text-ted-red">TED</span><span class="text-white">x</span><span class="text-white">NSU</span>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-8">
				{#each navLinks as link}
					<a 
						href={link.href} 
						class="text-white hover:text-ted-red transition-colors font-medium text-sm uppercase tracking-wider"
					>
						{link.label}
					</a>
				{/each}
				<a href="/register" class="btn-primary text-sm px-6 py-3">
					Register
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button 
				onclick={toggleMenu}
				class="lg:hidden p-2 text-white hover:text-ted-red transition-colors"
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
		<div class="lg:hidden bg-black border-t border-gray-800">
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
					<a href="/register" onclick={closeMenu} class="btn-primary text-center mt-4">
						Register Now
					</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

<!-- Spacer to prevent content from hiding under fixed nav -->
<div class="h-20 md:h-24"></div>
