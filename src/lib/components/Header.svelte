<script lang="ts">
	import Link from "$lib/components/Link.svelte"
	import Github from "$lib/icons/Github.svelte"
	import X from "$lib/icons/X.svelte"
</script>

<div class="mt-12">
	<header class="flex h-16 items-center justify-between">
		<a href="/">
			<h2 class="text-lg font-bold">vloe</h2>
		</a>
		<nav class="flex items-center space-x-1">
			<Link
				href="https://x.com/vloedev"
				target="_blank"
				rel="noopener noreferrer"
				variant="ghost"
				size="icon"
			>
				<X class="h-4 w-4" />
			</Link>
			<Link
				href="https://github.com/vloe"
				target="_blank"
				rel="noopener noreferrer"
				variant="ghost"
				size="icon"
			>
				<Github class="h-4 w-4" />
			</Link>
		</nav>
	</header>
</div>
