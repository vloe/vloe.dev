<script lang="ts">
	import type { Snippet } from "svelte"

	import "../app.css"

	type $Props = {
		children: Snippet
	}

	let { children }: $Props = $props()
</script>

<div class="container mx-auto max-w-xl scroll-smooth px-6">
	{@render children()}
</div>
