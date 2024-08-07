<script lang="ts">
	import Github from "$lib/icons/Github.svelte"
	import Twitter from "$lib/icons/Twitter.svelte"
	import { Btn } from "$lib/ui/btn"

	const title = "vloe"
	const desc = "cs student"
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="title" />
	<meta content={desc} name="description" />
</svelte:head>

<div class="pt-24">
	<header class="flex h-16 items-center justify-between">
		<div class="flex flex-col justify-center gap-y-0.5 text-white">
			<h1 class="text-lg font-semibold">ɣloe</h1>
			<h3 class="text-sm">cs student</h3>
		</div>
		<div class="flex items-center gap-x-2">
			<Btn
				href="https://x.com/vloedev"
				intent="ghost"
				rel="noopener noreferrer"
				size="icon"
				target="_blank"
			>
				<Twitter />
			</Btn>
			<Btn
				href="https://github.com/vloe"
				intent="ghost"
				rel="noopener noreferrer"
				size="icon"
				target="_blank"
			>
				<Github />
			</Btn>
		</div>
	</header>
</div>
<div class="pt-8">
	<main class="flex flex-col gap-y-4">
		<h2 class="font-medium tracking-wider text-white">projects</h2>
		<ul class="flex flex-col gap-y-3 text-sm">
			<li class="grid items-start gap-1.5">
				<a
					class="text-white underline underline-offset-4"
					href="https://shorter.dev"
					rel="noopener noreferrer"
					target="_blank"
				>
					shorter
				</a>
				<span class="text-neutral-400">a domain shortener tool</span>
			</li>
			<li class="grid items-start gap-1.5">
				<a class="text-white underline underline-offset-4" href="/"> vloe.dev </a>
				<span class="text-neutral-400">a minimal personal site</span>
			</li>
			<li class="grid items-start gap-1.5">
				<a
					class="text-white underline underline-offset-4"
					href="https://github.com/vloe/nvim"
					rel="noopener noreferrer"
					target="_blank"
				>
					nvim
				</a>
				<span class="text-neutral-400">my nvim config</span>
			</li>
		</ul>
	</main>
</div>
