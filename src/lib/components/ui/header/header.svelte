<script lang="ts">
	import { goto } from "$app/navigation"
	import { Uio } from "$lib/components/icons/uio"
</script>

<div class="pt-24">
	<header class="flex h-16 items-center justify-between">
		<button
			class="flex flex-col items-start justify-center gap-y-0.5"
			onclick={() => goto("/")}
		>
			<h1 class="text-lg font-semibold tracking-tight">ɣloe</h1>
			<span class="flex items-center gap-x-1.5 text-sm">
				cs undergrad
				<Uio />
			</span>
		</button>
		<div class="flex items-center gap-x-1.5">
			<a href="https://x.com/vloedev" rel="noopener noreferrer" target="_blank"> twitter </a>
			/
			<a href="https://github.com/vloe" rel="noopener noreferrer" target="_blank"> github </a>
		</div>
	</header>
</div>
