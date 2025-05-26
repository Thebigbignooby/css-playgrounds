<script>
	import { container } from './flexbox.css';
	import CssOptionSelector from './CssOptionSelector.svelte';

	let {
		flexDirection = $bindable(),
		flexWrap = $bindable(),
		justifyContent = $bindable(),
		alignItems = $bindable()
	} = $props();

	// $effect(() => {
	// 	console.log('--- CONFIG ---');
	// 	console.log(flexDirection, flexWrap, justifyContent, alignItems);
	// });
</script>

<div class="config">
	<CssOptionSelector
		optionName="Flex Direction"
		options={container.flexDirection.options}
		bind:selectedOption={flexDirection}
	/>
	<CssOptionSelector
		optionName="Flex Wrap"
		options={container.flexWrap.options}
		bind:selectedOption={flexWrap}
	/>
	<CssOptionSelector
		optionName="Justify Content"
		options={container.justifyContent.options}
		bind:selectedOption={justifyContent}
	/>
	<CssOptionSelector
		optionName="Align Items"
		options={container.alignItems.options}
		bind:selectedOption={alignItems}
	/>
</div>

<style>
	.config {
		padding: var(--padding-x) var(--padding-x);
		background-color: var(--clr-brand-70);
	}
</style>
