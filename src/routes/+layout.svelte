<script>
	import "../app.css"
	import Navbar from "$lib/components/Navbar.svelte"

	let { children } = $props()
</script>

<div class="container max-w-screen-sm px-8">
	<Navbar />
	{@render children()}
</div>
