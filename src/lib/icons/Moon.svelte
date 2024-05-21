<script lang="ts">
	import { cn } from "$lib/utils/cn"

	// props
	interface $Props {
		class?: string
	}
	let { class: className }: $Props = $props()
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	fill="currentColor"
	class={cn("h-5 w-5", className)}
>
	<path
		d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
	/>
</svg>
