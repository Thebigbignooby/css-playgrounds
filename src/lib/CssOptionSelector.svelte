<script>
	let { options = [], optionName, selectedOption = $bindable() } = $props();
</script>

<div>
	<label for={optionName}>{optionName}</label>
	<select bind:value={selectedOption}>
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</div>

<style>
	select {
		width: 100%;
	}
</style>
