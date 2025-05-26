<script>
	let { flexDirection, flexWrap, justifyContent, alignItems, children } = $props();
</script>

<div
	style="
      --flexDirection: {flexDirection};
      --flexWrap: {flexWrap};
      --justifyContent: {justifyContent};
      --alignItems: {alignItems};
  "
	class="container"
>
	{@render children()}
</div>

<style>
	.container {
		background-color: var(--clr-brand-80);
		padding: var(--padding-x) var(--padding-x);

		display: flex;
		flex-direction: var(--flexDirection);
		flex-wrap: var(--flexWrap);
		justify-content: var(--justifyContent);
		align-items: var(--alignItems);
	}
</style>
