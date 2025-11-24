<script lang="ts">
	import { Facebook, Instagram, Mail } from 'lucide-svelte';
</script>

<footer class="bg-ted-black text-white">
	<!-- Main Footer Content -->
	<div class="container-custom py-16">
		<div class="grid md:grid-cols-3 gap-12 mb-12">
			<!-- Logo & Tagline -->
			<div class="space-y-4">
				<h3 class="text-3xl font-black">
					<span class="text-ted-red">TED</span><span class="text-white">x</span>NSU
				</h3>
				<p class="text-gray-400">
					Ideas Worth Spreading
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="text-lg font-bold uppercase tracking-wider mb-6">Quick Links</h4>
				<ul class="space-y-3">
					<li>
						<a href="#about" class="text-gray-400 hover:text-ted-red transition-colors">About</a>
					</li>
					<li>
						<a href="#speakers" class="text-gray-400 hover:text-ted-red transition-colors">Speakers</a>
					</li>
					<li>
						<a href="#schedule" class="text-gray-400 hover:text-ted-red transition-colors">Schedule</a>
					</li>
					<li>
						<a href="#venue" class="text-gray-400 hover:text-ted-red transition-colors">Venue</a>
					</li>
				</ul>
			</div>

			<!-- Contact & Social -->
			<div>
				<h4 class="text-lg font-bold uppercase tracking-wider mb-6">Connect With Us</h4>
				<div class="flex gap-4 mb-6">
					<a 
						href="https://facebook.com" 
						target="_blank"
						rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-800 hover:bg-ted-red rounded-full flex items-center justify-center transition-colors"
						aria-label="Facebook"
					>
						<Facebook class="w-5 h-5" />
					</a>
					<a 
						href="https://instagram.com" 
						target="_blank"
						rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-800 hover:bg-ted-red rounded-full flex items-center justify-center transition-colors"
						aria-label="Instagram"
					>
						<Instagram class="w-5 h-5" />
					</a>
					<a 
						href="mailto:info@tedxnorthsouthuniversity.com" 
						class="w-12 h-12 bg-gray-800 hover:bg-ted-red rounded-full flex items-center justify-center transition-colors"
						aria-label="Email"
					>
						<Mail class="w-5 h-5" />
					</a>
				</div>
				<p class="text-gray-400 text-sm">
					info@tedxnorthsouthuniversity.com
				</p>
			</div>
		</div>
	</div>

	<!-- Required TEDx License Footer -->
	<div class="border-t border-gray-800">
		<div class="container-custom py-8">
			<p class="text-center text-gray-500 text-sm">
				This independent TEDx event is operated under license from TED.
			</p>
			<p class="text-center text-gray-600 text-xs mt-4">
				© 2025 TEDxNorthSouthUniversity. All rights reserved.
			</p>
		</div>
	</div>
</footer>
