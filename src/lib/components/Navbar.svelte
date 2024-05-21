<script lang="ts">
	import Github from "$lib/icons/Github.svelte"
	import Link from "$lib/components/Link.svelte"
	import Button from "$lib/components/Button.svelte"
</script>

<nav class="mt-12 flex items-center justify-between">
	<a href="/" class="text-lg font-semibold"> vloe </a>
	<div class="flex items-center space-x-2">
		<Link
			href="https://github.com/vloe"
			target="_blank"
			rel="noreferrer"
			variant="ghost"
			size="xs"
		>
			<Github class="h-4 w-4" />
		</Link>
		<Button variant="outline" size="sm">Sign in</Button>
	</div>
</nav>
