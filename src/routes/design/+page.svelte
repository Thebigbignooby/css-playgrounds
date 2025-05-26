<script>
	let degs = [
		0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
		210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360
	];

	let lights = [0.02, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.98];

	let chromas = [
		0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12, 0.13, 0.14, 0.15,
		0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.3, 0.31,
		0.32, 0.33, 0.34, 0.35, 0.36, 0.37
	];

	let chromaState = $state(0.2);
	let lightState = $state(0.5);
	let hueState = $state(0);
</script>

<h1>Colors</h1>

<label for="chroma-slider">Chroma: {chromaState}</label><br />
<input
	type="range"
	class="chroma-slider"
	name="chroma-slider"
	min="0"
	max="0.37"
	bind:value={chromaState}
	step="0.01"
/>

<div class="colors-chroma">
	<div></div>
	{#each lights as light}
		<div>{light}</div>
	{/each}
	{#each degs as deg}
		<div>{deg}</div>
		{#each lights as light}
			<div class="bg" style="--l: {light}; --c: {chromaState}; --h: {deg}; "></div>
		{/each}
	{/each}
</div>

<label for="light-slider">Light: {lightState}</label><br />
<input
	type="range"
	class="light-slider"
	name="light-slider"
	min="0"
	max="1"
	bind:value={lightState}
	step="0.01"
/>

<div class="colors-lightness">
	<div></div>
	{#each chromas as chroma}
		<div>{chroma}</div>
	{/each}
	{#each degs as deg}
		<div>{deg}</div>
		{#each chromas as chroma}
			<div class="bg" style="--l: {lightState}; --c: {chroma}; --h: {deg}; "></div>
		{/each}
	{/each}
</div>

<label for="hue-slider">Hue: {hueState}</label><br />
<input
	type="range"
	class="hue-slider"
	name="hue-slider"
	min="0"
	max="360"
	bind:value={hueState}
	step="1"
/>

<div class="colors-hue">
	<div></div>
	{#each lights as light}
		<div>{light}</div>
	{/each}
	{#each chromas as chroma}
		<div>{chroma}</div>
		{#each lights as light}
			<div class="bg" style="--l: {light}; --c: {chroma}; --h: {hueState}; "></div>
		{/each}
	{/each}
</div>

<style>
	:root {
		/* Gray */
		--sl-color-gray-50: hsl(0 0% 97.5%);
		--sl-color-gray-100: hsl(240 4.8% 95.9%);
		--sl-color-gray-200: hsl(240 5.9% 90%);
		--sl-color-gray-300: hsl(240 4.9% 83.9%);
		--sl-color-gray-400: hsl(240 5% 64.9%);
		--sl-color-gray-500: hsl(240 3.8% 46.1%);
		--sl-color-gray-600: hsl(240 5.2% 33.9%);
		--sl-color-gray-700: hsl(240 5.3% 26.1%);
		--sl-color-gray-800: hsl(240 3.7% 15.9%);
		--sl-color-gray-900: hsl(240 5.9% 10%);
		--sl-color-gray-950: hsl(240 7.3% 8%);
	}

	.chroma-slider {
	}

	.bg {
		--l: 50%;
		--c: 0.2;
		--h: 0;
		--_color: oklch(var(--l) var(--c) var(--h));

		background-color: white;
		background-color: var(--_color);
		border: 1px solid black;
	}

	.colors-chroma {
		padding: 1rem;
		display: grid;
		grid-template-columns: auto repeat(13, 1fr);
		gap: 0.4em;
	}

	.colors-lightness {
		padding: 1rem;
		display: grid;
		grid-template-columns: auto repeat(38, 1fr);
		gap: 0.1em;
	}

	.colors-hue {
		padding: 1rem;
		display: grid;
		grid-template-columns: auto repeat(13, 1fr);
		gap: 0.1em;
	}
</style>
