<script lang="ts">
	import type { Snippet } from "svelte"

	import "../app.css"

	type $Props = {
		children: Snippet
	}

	let { children }: $Props = $props()
</script>

<div class="container mx-auto max-w-2xl scroll-smooth px-4 sm:px-12">
	{@render children()}
</div>
