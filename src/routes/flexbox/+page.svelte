<script>
	import Header from '$lib/Header.svelte';
	import Subheader from '$lib/Subheader.svelte';
	import Playground from '$lib/FlexboxPlayground.svelte';
</script>

<svelte:head>
	<title>CSS Playground: Flexbox</title>
</svelte:head>

<Header />
<Subheader />
<Playground />

<style>
	:global(body) {
		height: 100svh;
		display: grid;
		grid-template-rows: auto auto 1fr;
		grid-template-areas:
			'header'
			'subheader'
			'playground';
		overflow: hidden;
	}
	@media screen and (width < 800px) {
		:global(body) {
			grid-template-rows: auto 1fr auto;
			grid-template-areas:
				'subheader'
				'playground'
				'header';
		}
	}
</style>
