<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="https://i0.wp.com/tedxankara.com/wp-content/uploads/2018/01/cropped-favicon-1.png" />
</svelte:head>

{@render children()}
