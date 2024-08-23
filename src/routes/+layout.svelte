<script lang="ts">
	import type { Snippet } from "svelte"

	import "../app.css"

	type $Props = {
		children: Snippet
	}

	let { children }: $Props = $props()
</script>

<div class="container mx-auto max-w-2xl px-6">
	{@render children()}
</div>
