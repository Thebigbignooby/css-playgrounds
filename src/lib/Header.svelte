<script>
	// TODO: get title from URL or something
</script>

<header>
	<h1>
		<span style:view-transition-name="title">CSS Playground</span>:
		<span style:view-transition-name="bg-flexbox">
			<span style:view-transition-name="flexbox">Flexbox</span>
		</span>
	</h1>
	<nav>
		<a href="/link1">link 1</a>
		<a href="/link2">link 2</a>
	</nav>
	<span>theme</span>
</header>

<style>
	header {
		padding: var(--padding-x) var(--padding-x);
		grid-area: header;
		display: grid;
		grid-template-columns: 1fr auto auto;
		align-items: center;
	}
</style>
