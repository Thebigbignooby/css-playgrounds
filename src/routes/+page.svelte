<svelte:head>
	<title>CSS Playground</title>
</svelte:head>

<main>
	<div class="hero">
		<h1><span style:view-transition-name="title">CSS Playground</span></h1>
	</div>
	<nav>
		<!-- <a href="/flexbox" style:--playground="flexbox">Flexbox</a>
    <a href="/grid" style:--playground="grid">Grid</a> -->
		<a href="/flexbox"><span style:view-transition-name="flexbox">Flexbox</span></a>
		<a href="/grid"><span style:view-transition-name="grid">Grid</span></a>
	</nav>
</main>

<style>
	main {
		height: 100svh;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h1 {
		text-align: center;
	}
	nav {
		min-width: 400px;
		margin: 0 auto auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;

		a {
			text-decoration: none;
			background-color: aquamarine;
			padding: 1rem;

			&:hover,
			&:focus {
				text-decoration: underline;
				outline-style: auto;
				outline-offset: 1px;
				outline-width: 1px;
			}
		}
	}
</style>
