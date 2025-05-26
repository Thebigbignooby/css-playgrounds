<script>
	import FlexboxContainerConfig from './FlexboxContainerConfig.svelte';
	import FlexboxView from './FlexboxView.svelte';
	import FlexItem from './FlexItem.svelte';
	import { container } from './flexbox.css';
	import { itemsArray } from './flexbox.store.svelte';

	let flexDirection = $state(container.flexDirection.default);
	let flexWrap = $state(container.flexWrap.default);
	let justifyContent = $state(container.justifyContent.default);
	let alignItems = $state(container.alignItems.default);
	// $effect(() => {
	// 	console.log('--- PLAYGROUND ---');
	// 	console.log(flexDirection, flexWrap, justifyContent, alignItems);
	// });

	const CONFIG = 'CONFIG';
	const VIEW = 'VIEW';
	let checked = $state(false);
	let isVisible = $derived(checked ? VIEW : CONFIG);
</script>

<div class="playground">
	<div class="config-and-view" m-visible={isVisible}>
		<FlexboxContainerConfig bind:flexDirection bind:flexWrap bind:justifyContent bind:alignItems />
		<FlexboxView {flexDirection} {flexWrap} {justifyContent} {alignItems}>
			{#each itemsArray as item, index (item)}
				<FlexItem {...item} />
			{/each}
		</FlexboxView>
	</div>
	<div class="switcher">
		<input type="checkbox" bind:checked /> Switcher: {isVisible}
	</div>
</div>

<style>
	.switcher {
		grid-area: switcher;
		display: none;
	}
	.playground {
		grid-area: playground;
		display: grid;
		grid-template-rows: 1fr auto;
	}
	.config-and-view {
		display: grid;
		grid-template-columns: minmax(200px, 1fr) 4fr;
	}

	@media screen and (width < 560px) {
		.switcher {
			display: block;
		}
		.playground {
			overflow-x: hidden;
			grid-template-areas:
				'cnf-and-view cnf-and-view'
				'switcher .';
		}
		.config-and-view {
			grid-area: cnf-and-view;
			width: 200vw;
			grid-template-columns: 1fr 1fr;
			transition: transform 0.3s;
		}
		.config-and-view[m-visible='VIEW'] {
			transform: translate(-50%);
		}
	}
</style>
