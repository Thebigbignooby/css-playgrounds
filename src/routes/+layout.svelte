<script>
	import LoadFont from '$lib/globals/LoadFont.svelte';
	import ViewTransition from '$lib/globals/ViewTransition.svelte';
	import '$lib/design.css';
</script>

<LoadFont />
<ViewTransition />

<slot></slot>

<style>
	:global(*) {
		margin: 0;
	}
	:global(html, body) {
		height: 100svh;
		background-color: aliceblue;
	}
</style>
