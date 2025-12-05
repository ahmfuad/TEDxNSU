<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLDivElement;
	let revealed = $state(false);

	let { 
		children,
		delay = 0,
		threshold = 0.1
	} = $props<{
		children: any;
		delay?: number;
		threshold?: number;
	}>();

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !revealed) {
						setTimeout(() => {
							revealed = true;
						}, delay);
					}
				});
			},
			{
				threshold,
				rootMargin: '0px 0px -50px 0px'
			}
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});
</script>

<div 
	bind:this={element}
	class="scroll-reveal {revealed ? 'revealed' : ''}"
>
	{@render children()}
</div>
