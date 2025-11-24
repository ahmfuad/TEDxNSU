<script lang="ts">
	import { Calendar, MapPin, Mail, User, Phone, Building } from 'lucide-svelte';
	
	let formData = $state({
		fullName: '',
		email: '',
		phone: '',
		organization: '',
		dietary: '',
		emergencyContact: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// Handle form submission here
		alert('Thank you for registering! We will send you a confirmation email shortly.');
	}
</script>

<svelte:head>
	<title>Register - TEDxNorthSouthUniversity 2025</title>
	<meta name="description" content="Register for TEDxNorthSouthUniversity on 6 December 2025. Limited seats available!" />
</svelte:head>

<div class="min-h-screen bg-[#0a0a0a] py-20">
	<div class="container-custom max-w-4xl">
		<!-- Header -->
		<div class="text-center mb-12">
			<a href="/" class="inline-block mb-8">
				<h1 class="text-4xl md:text-5xl font-black tracking-tight">
					<span class="text-ted-red">TED</span><span class="text-white">x</span><span class="text-white">NSU</span>
				</h1>
			</a>
			<h2 class="text-4xl md:text-5xl font-black text-white mb-4">
				Event <span class="text-ted-red">Registration</span>
			</h2>
			<p class="text-xl text-gray-400">
				Secure your seat for 6 December 2025
			</p>
		</div>

		<!-- Event Info Cards -->
		<div class="grid md:grid-cols-2 gap-6 mb-12">
			<div class="bg-[#1a1a1a] border border-gray-900 p-6 flex items-center gap-4">
				<div class="p-3 bg-ted-red rounded-full">
					<Calendar class="w-6 h-6 text-white" />
				</div>
				<div>
					<p class="text-sm text-gray-500 uppercase tracking-wider">Date</p>
					<p class="text-lg font-bold text-white">6 December 2025</p>
				</div>
			</div>
			
			<div class="bg-[#1a1a1a] border border-gray-900 p-6 flex items-center gap-4">
				<div class="p-3 bg-ted-red rounded-full">
					<MapPin class="w-6 h-6 text-white" />
				</div>
				<div>
					<p class="text-sm text-gray-500 uppercase tracking-wider">Venue</p>
					<p class="text-lg font-bold text-white">North South University</p>
				</div>
			</div>
		</div>

		<!-- Registration Form -->
		<form onsubmit={handleSubmit} class="bg-[#1a1a1a] border border-gray-900 p-8 md:p-12 space-y-6">
			<h3 class="text-2xl font-bold text-white mb-6">Registration Details</h3>

			<!-- Full Name -->
			<div class="space-y-2">
				<label for="fullName" class="block text-sm font-semibold text-gray-400 uppercase tracking-wider">
					Full Name *
				</label>
				<div class="relative">
					<User class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
					<input
						type="text"
						id="fullName"
						bind:value={formData.fullName}
						required
						class="w-full bg-[#0a0a0a] border border-gray-800 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-ted-red transition-colors"
						placeholder="Enter your full name"
					/>
				</div>
			</div>

			<!-- Email -->
			<div class="space-y-2">
				<label for="email" class="block text-sm font-semibold text-gray-400 uppercase tracking-wider">
					Email Address *
				</label>
				<div class="relative">
					<Mail class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full bg-[#0a0a0a] border border-gray-800 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-ted-red transition-colors"
						placeholder="your.email@example.com"
					/>
				</div>
			</div>

			<!-- Phone -->
			<div class="space-y-2">
				<label for="phone" class="block text-sm font-semibold text-gray-400 uppercase tracking-wider">
					Phone Number *
				</label>
				<div class="relative">
					<Phone class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
					<input
						type="tel"
						id="phone"
						bind:value={formData.phone}
						required
						class="w-full bg-[#0a0a0a] border border-gray-800 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-ted-red transition-colors"
						placeholder="+880 1234 567890"
					/>
				</div>
			</div>

			<!-- Organization -->
			<div class="space-y-2">
				<label for="organization" class="block text-sm font-semibold text-gray-400 uppercase tracking-wider">
					Organization/Institution
				</label>
				<div class="relative">
					<Building class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
					<input
						type="text"
						id="organization"
						bind:value={formData.organization}
						class="w-full bg-[#0a0a0a] border border-gray-800 text-white pl-12 pr-4 py-3 focus:outline-none focus:border-ted-red transition-colors"
						placeholder="Your organization or university"
					/>
				</div>
			</div>

			<!-- Dietary Restrictions -->
			<div class="space-y-2">
				<label for="dietary" class="block text-sm font-semibold text-gray-400 uppercase tracking-wider">
					Dietary Restrictions
				</label>
				<input
					type="text"
					id="dietary"
					bind:value={formData.dietary}
					class="w-full bg-[#0a0a0a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-ted-red transition-colors"
					placeholder="Vegetarian, Halal, Allergies, etc."
				/>
			</div>

			<!-- Emergency Contact -->
			<div class="space-y-2">
				<label for="emergencyContact" class="block text-sm font-semibold text-gray-400 uppercase tracking-wider">
					Emergency Contact Number
				</label>
				<input
					type="tel"
					id="emergencyContact"
					bind:value={formData.emergencyContact}
					class="w-full bg-[#0a0a0a] border border-gray-800 text-white px-4 py-3 focus:outline-none focus:border-ted-red transition-colors"
					placeholder="+880 1234 567890"
				/>
			</div>

			<!-- Terms -->
			<div class="flex items-start gap-3 pt-4">
				<input
					type="checkbox"
					id="terms"
					required
					class="mt-1 w-4 h-4 accent-ted-red"
				/>
				<label for="terms" class="text-sm text-gray-400">
					I agree to receive event updates and communications from TEDxNorthSouthUniversity. 
					I understand that my information will be kept confidential and used only for event purposes.
				</label>
			</div>

			<!-- Submit Button -->
			<div class="pt-6">
				<button type="submit" class="w-full btn-primary py-4 text-lg">
					Complete Registration
				</button>
			</div>

			<p class="text-center text-sm text-gray-500 pt-4">
				* Required fields
			</p>
		</form>

		<!-- Additional Info -->
		<div class="mt-12 text-center">
			<p class="text-gray-500 mb-4">
				Questions about registration?
			</p>
			<a href="mailto:info@tedxnorthsouthuniversity.com" class="text-ted-red hover:underline">
				info@tedxnorthsouthuniversity.com
			</a>
		</div>

		<!-- Back to Home -->
		<div class="mt-8 text-center">
			<a href="/" class="text-white hover:text-ted-red transition-colors">
				← Back to Home
			</a>
		</div>
	</div>
</div>
