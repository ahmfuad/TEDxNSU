<script lang="ts">
	import { Facebook, Mail, Linkedin } from 'lucide-svelte';
</script>

<footer class="bg-ted-black text-white">
	<!-- Main Footer Content -->
	<div class="container-custom py-16">
		<div class="grid md:grid-cols-3 gap-12 mb-12">
			<!-- Logo & Tagline -->
			<div class="space-y-4">
				<img src="/logo-white.png" alt="TEDxNSU Logo" class="h-12 w-auto mb-2" />
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
						<a href="#venue" class="text-gray-400 hover:text-ted-red transition-colors">Venue</a>
					</li>
					<li>
						<a href="#faq" class="text-gray-400 hover:text-ted-red transition-colors">FAQ</a>
					</li>
				</ul>
			</div>

			<!-- Contact & Social -->
			<div>
				<h4 class="text-lg font-bold uppercase tracking-wider mb-6">Connect With Us</h4>
				<div class="flex gap-4 mb-6">
					<a 
						href="https://www.facebook.com/NSUBusinessAnalyticsClub" 
						target="_blank"
						rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-800 hover:bg-ted-red rounded-full flex items-center justify-center transition-colors"
						aria-label="Facebook"
					>
						<Facebook class="w-5 h-5" />
					</a>
					<a 
						href="https://www.linkedin.com/company/nsu-business-analytics-club" 
						target="_blank"
						rel="noopener noreferrer"
						class="w-12 h-12 bg-gray-800 hover:bg-ted-red rounded-full flex items-center justify-center transition-colors"
						aria-label="LinkedIn"
					>
						<Linkedin class="w-5 h-5" />
					</a>
					<a 
						href="mailto:tedxnorthsouthuniversity25@gmail.com" 
						class="w-12 h-12 bg-gray-800 hover:bg-ted-red rounded-full flex items-center justify-center transition-colors"
						aria-label="Email"
					>
						<Mail class="w-5 h-5" />
					</a>
				</div>
				<p class="text-gray-400 text-sm">
					tedxnorthsouthuniversity25@gmail.com
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
			<p class="text-center text-gray-600 text-xs mt-3">
				Technical support by{' '}
				<a 
					href="https://factorite.com" 
					target="_blank" 
					rel="noopener noreferrer"
					class="text-ted-red hover:text-red-600 font-semibold transition-colors hover:underline"
				>
					Factorite
				</a>
        <a style="display:none;" href="https://hits.sh/tedxnorthsouthuniversity.com/"><img alt="Hits" style="display:none;" src="https://hits.sh/tedxnorthsouthuniversity.com.svg"/></a>

			</p>
		</div>
	</div>
</footer>
