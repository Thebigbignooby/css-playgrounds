<script>
	const { id, text, height, width, fontSize } = $props();
</script>

<div
	class="item"
	style="
						--height: {height}px;
						--width: {width}px;
						--fontSize: {fontSize}em;
						"
>
	<div class="content">
		{text}
	</div>
</div>

<style>
	div.item {
		display: flex;
		position: relative;
		background: rgba(0, 150, 200, 1);
		border-radius: 8px;
	}

	div.content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		text-align: center;
		color: white;
		height: 100%;
		width: 100%;

		/*  VARIABLES  */
		min-height: var(--height);
		min-width: var(--width);
		font-size: var(--fontSize);
	}
</style>
