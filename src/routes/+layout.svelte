<script>
	import "../app.css"
    import Header from "$lib/components/Header.svelte"

	let { children } = $props()
</script>

<div class="container max-w-screen-sm px-8">
    <Header />
	{@render children()}
</div>
