<script>
	import "../app.css"

	let { children } = $props()
</script>

<div class="container max-w-screen-sm px-8">
	{@render children()}
</div>
