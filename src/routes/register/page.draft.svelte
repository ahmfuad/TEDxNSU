<script lang="ts">
	import { Calendar, MapPin, User, Phone, Building2, Mail, IdCard } from 'lucide-svelte';
	
	let formData = $state({
		fullName: '',
		nsuId: '',
		department: '',
		email: '',
		phone: '',
		confirmStudent: false,
		agreeRefund: false
	});

	let errors = $state({
		email: '',
		phone: ''
	});

	function validateEmail(email: string): boolean {
		if (!email.endsWith('@northsouth.edu')) {
			errors.email = 'Email must be a North South University email (@northsouth.edu)';
			return false;
		}
		errors.email = '';
		return true;
	}

	function validatePhone(phone: string): boolean {
		// Remove spaces and check if it starts with 88
		const cleanPhone = phone.replace(/\s/g, '');
		if (!cleanPhone.startsWith('88')) {
			errors.phone = 'Phone number must start with 88 (Bangladesh country code)';
			return false;
		}
		errors.phone = '';
		return true;
	}

	function handleEmailBlur() {
		if (formData.email) {
			validateEmail(formData.email);
		}
	}

	function handlePhoneBlur() {
		if (formData.phone) {
			validatePhone(formData.phone);
		}
	}

	function handleSubmit(e: Event) {
		e.preventDefault();
		
		// Validate before submission
		const emailValid = validateEmail(formData.email);
		const phoneValid = validatePhone(formData.phone);

		if (!emailValid || !phoneValid) {
			alert('Please fix the errors in the form before submitting.');
			return;
		}

		if (!formData.confirmStudent || !formData.agreeRefund) {
			alert('Please confirm both checkboxes to proceed.');
			return;
		}

		console.log('Form submitted:', formData);
		alert('Thank you for registering! We will send you a confirmation email shortly.');
	}
</script>

<svelte:head>
	<title>Register - TEDxNorthSouthUniversity 2025</title>
	<meta name="description" content="Register for TEDxNorthSouthUniversity on 6 December 2025. Limited seats available!" />
</svelte:head>

<div class="min-h-screen bg-[#0a0a0a] py-20">
	<div class="container-custom max-w-3xl">
		<!-- Header with Logo -->
		<div class="text-center mb-12">
			<a href="/" class="inline-block mb-6">
				<img src="/logo-white.png" alt="TEDxNSU Logo" class="h-16 md:h-20 w-auto mx-auto" />
			</a>
			<h2 class="text-3xl md:text-4xl font-black text-white mb-3">
				Event <span class="text-ted-red">Registration</span>
			</h2>
			<p class="text-lg text-gray-400">
				Secure your seat for 6 December 2025
			</p>
		</div>

		<!-- Event Info Cards -->
		<div class="grid md:grid-cols-2 gap-4 mb-10">
			<div class="bg-[#1a1a1a] border border-gray-800 p-5 flex items-center gap-4 hover:border-ted-red transition-colors">
				<div class="p-3 bg-ted-red rounded-lg">
					<Calendar class="w-5 h-5 text-white" />
				</div>
				<div>
					<p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Event Date</p>
					<p class="text-base font-bold text-white">6 December 2025</p>
				</div>
			</div>
			
			<div class="bg-[#1a1a1a] border border-gray-800 p-5 flex items-center gap-4 hover:border-ted-red transition-colors">
				<div class="p-3 bg-ted-red rounded-lg">
					<MapPin class="w-5 h-5 text-white" />
				</div>
				<div>
					<p class="text-xs text-gray-500 uppercase tracking-wider font-semibold">Venue</p>
					<p class="text-base font-bold text-white">NSU, Auditorium 801</p>
				</div>
			</div>
		</div>

		<!-- Registration Form -->
		<form onsubmit={handleSubmit} class="bg-[#1a1a1a] border border-gray-800 rounded-sm overflow-hidden">
			<!-- Form Header -->
			<div class="bg-gradient-to-r from-ted-red to-red-700 px-8 py-6">
				<h3 class="text-xl font-bold text-white">Registration Form</h3>
				<p class="text-sm text-white/80 mt-1">Please fill in your details accurately</p>
			</div>

			<div class="px-8 py-8 space-y-6">
				<!-- Full Name -->
				<div class="space-y-2">
					<label for="fullName" class="block text-sm font-bold text-gray-300 uppercase tracking-wider">
						Full Name <span class="text-ted-red">*</span>
					</label>
					<div class="relative">
						<User class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
						<input
							type="text"
							id="fullName"
							bind:value={formData.fullName}
							required
							class="w-full bg-[#0a0a0a] border border-gray-700 text-white pl-12 pr-4 py-3.5 rounded-sm focus:outline-none focus:border-ted-red focus:ring-1 focus:ring-ted-red transition-all"
							placeholder="Enter your full name"
						/>
					</div>
				</div>

				<!-- NSU ID -->
				<div class="space-y-2">
					<label for="nsuId" class="block text-sm font-bold text-gray-300 uppercase tracking-wider">
						NSU ID <span class="text-ted-red">*</span>
					</label>
					<div class="relative">
						<IdCard class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
						<input
							type="text"
							id="nsuId"
							bind:value={formData.nsuId}
							required
							class="w-full bg-[#0a0a0a] border border-gray-700 text-white pl-12 pr-4 py-3.5 rounded-sm focus:outline-none focus:border-ted-red focus:ring-1 focus:ring-ted-red transition-all"
							placeholder="e.g., 2021123456"
						/>
					</div>
				</div>

				<!-- Department -->
				<div class="space-y-2">
					<label for="department" class="block text-sm font-bold text-gray-300 uppercase tracking-wider">
						Department <span class="text-ted-red">*</span>
					</label>
					<div class="relative">
						<Building2 class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
						<input
							type="text"
							id="department"
							bind:value={formData.department}
							required
							class="w-full bg-[#0a0a0a] border border-gray-700 text-white pl-12 pr-4 py-3.5 rounded-sm focus:outline-none focus:border-ted-red focus:ring-1 focus:ring-ted-red transition-all"
							placeholder="e.g., Computer Science & Engineering"
						/>
					</div>
				</div>

				<!-- NSU Email -->
				<div class="space-y-2">
					<label for="email" class="block text-sm font-bold text-gray-300 uppercase tracking-wider">
						NSU Email ID <span class="text-ted-red">*</span>
					</label>
					<div class="relative">
						<Mail class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							onblur={handleEmailBlur}
							required
							class="w-full bg-[#0a0a0a] border border-gray-700 text-white pl-12 pr-4 py-3.5 rounded-sm focus:outline-none focus:border-ted-red focus:ring-1 focus:ring-ted-red transition-all {errors.email ? 'border-red-500' : ''}"
							placeholder="yourname@northsouth.edu"
						/>
					</div>
					{#if errors.email}
						<p class="text-red-500 text-sm mt-1">{errors.email}</p>
					{/if}
				</div>

				<!-- Phone Number -->
				<div class="space-y-2">
					<label for="phone" class="block text-sm font-bold text-gray-300 uppercase tracking-wider">
						Phone Number <span class="text-ted-red">*</span>
					</label>
					<div class="relative">
						<Phone class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							onblur={handlePhoneBlur}
							required
							class="w-full bg-[#0a0a0a] border border-gray-700 text-white pl-12 pr-4 py-3.5 rounded-sm focus:outline-none focus:border-ted-red focus:ring-1 focus:ring-ted-red transition-all {errors.phone ? 'border-red-500' : ''}"
							placeholder="88 01XXX XXXXXX"
						/>
					</div>
					{#if errors.phone}
						<p class="text-red-500 text-sm mt-1">{errors.phone}</p>
					{/if}
					<p class="text-gray-500 text-xs mt-1">Must start with 88 (Bangladesh country code)</p>
				</div>

				<!-- Fee Section -->
				<div class="pt-6 border-t border-gray-800">
					<h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
						<div class="w-1 h-6 bg-ted-red"></div>
						Fee & Confirmation
					</h4>
					
					<div class="bg-[#0a0a0a] border border-gray-700 rounded-sm p-6 mb-6">
						<div class="flex justify-between items-center">
							<div>
								<p class="text-sm text-gray-400">Registration Fee</p>
								<p class="text-2xl font-bold text-white mt-1">৳500</p>
							</div>
							<div class="text-right">
								<p class="text-xs text-gray-500 uppercase">Non-Refundable</p>
								<p class="text-sm text-ted-red font-semibold">Per Person</p>
							</div>
						</div>
					</div>

					<!-- Checkboxes -->
					<div class="space-y-4">
						<div class="flex items-start gap-3 p-4 bg-[#0a0a0a] border border-gray-700 rounded-sm hover:border-ted-red transition-colors">
							<input
								type="checkbox"
								id="confirmStudent"
								bind:checked={formData.confirmStudent}
								required
								class="mt-1 w-5 h-5 accent-ted-red cursor-pointer"
							/>
							<label for="confirmStudent" class="text-sm text-gray-300 cursor-pointer flex-1">
								I confirm that I am a current student of <span class="font-semibold text-white">North South University</span>.
							</label>
						</div>

						<div class="flex items-start gap-3 p-4 bg-[#0a0a0a] border border-gray-700 rounded-sm hover:border-ted-red transition-colors">
							<input
								type="checkbox"
								id="agreeRefund"
								bind:checked={formData.agreeRefund}
								required
								class="mt-1 w-5 h-5 accent-ted-red cursor-pointer"
							/>
							<label for="agreeRefund" class="text-sm text-gray-300 cursor-pointer flex-1">
								I agree that the ticket fee is <span class="font-semibold text-white">non-refundable</span>.
							</label>
						</div>
					</div>
				</div>

				<!-- Submit Button -->
				<div class="pt-6">
					<button type="submit" class="w-full bg-ted-red hover:bg-red-700 text-white font-bold py-4 text-lg uppercase tracking-wider rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
						Complete Registration
					</button>
				</div>

				<p class="text-center text-xs text-gray-500 pt-2">
					<span class="text-ted-red">*</span> All fields are required
				</p>
			</div>
		</form>

		<!-- Additional Info -->
		<div class="mt-10 text-center space-y-4">
			<p class="text-gray-400 text-sm">
				Questions about registration?
			</p>
			<a href="mailto:info@tedxnorthsouthuniversity.com" class="text-ted-red hover:underline text-sm font-semibold">
				info@tedxnorthsouthuniversity.com
			</a>
		</div>

		<!-- Back to Home -->
		<div class="mt-8 text-center">
			<a href="/" class="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-2">
				<span>←</span> Back to Home
			</a>
		</div>
	</div>
</div>
