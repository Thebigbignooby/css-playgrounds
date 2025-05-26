<nav>
	<a href="/flexbox">Flexbox</a>
	<a href="/grid">Grid</a>
</nav>
<hr />

<style>
	:global(body) {
		@keyframes fade-in {
			from {
				opacity: 0;
			}
		}
		::view-transition-new(nav) {
			animation-name: fade-in;
			animation-duration: 300ms;
			/* animation-delay: 300ms; */
		}
	}
	nav {
		view-transition-name: nav;
	}
</style>
