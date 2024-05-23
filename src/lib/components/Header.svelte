<script lang="ts">
	import Link from "$lib/components/Link.svelte"
	import Github from "$lib/icons/Github.svelte"
	import X from "$lib/icons/X.svelte"
</script>

<div class="mt-14">
	<header class="flex h-16 items-center justify-between">
		<a href="/">
			<div class="flex flex-col space-y-1">
				<span class="text-lg font-bold">vloe</span>
				<span class="text-sm">cs student</span>
			</div>
		</a>
		<nav class="flex items-center space-x-1.5">
			<Link
				href="https://x.com/vloedev"
				target="_blank"
				rel="noopener noreferrer"
				variant="ghost"
				size="icon"
			>
				<X />
			</Link>
			<Link
				href="https://github.com/vloe"
				target="_blank"
				rel="noopener noreferrer"
				variant="ghost"
				size="icon"
			>
				<Github />
			</Link>
		</nav>
	</header>
</div>
