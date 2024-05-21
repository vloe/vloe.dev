<script>
	import "../app.css"

	let { children } = $props()
</script>

<div class="container max-w-screen-sm px-6">
	{@render children()}
</div>
