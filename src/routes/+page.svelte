<script lang="ts">
	let title = "vloe"
	let desc = "cs student"
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={desc} />
</svelte:head>

<main class="mt-8">
	<div class="flex flex-col space-y-6">
		<article>
			<div class="space-y-1.5">
				<h2 class="font-mono text-lg tracking-tighter">info</h2>
				<p class="text-sm text-muted-foreground">
					hi, i'm a 20 y/o cs student at university of oslo.
				</p>
			</div>
		</article>
		<article>
			<div class="space-y-1.5">
				<h2 class="font-mono text-lg tracking-tighter">projects</h2>
				<ul class="space-y-4 py-2">
					<li>
						<a
							href="https://github.com/vloe/nvim"
							target="_blank"
							rel="noreferrer"
							class="flex flex-col space-y-1.5 text-sm"
						>
							<span class="font-medium underline underline-offset-4">nvim</span>
							<span class="text-muted-foreground">my nvim config.</span>
						</a>
					</li>
					<li>
						<a
							href="https://github.com/vloe/vloe.dev"
							target="_blank"
							rel="noreferrer"
							class="flex flex-col space-y-1.5 text-sm"
						>
							<span class="font-medium underline underline-offset-4">vloe.dev</span>
							<span class="text-muted-foreground">a minimal personal site.</span>
						</a>
					</li>
				</ul>
			</div>
		</article>
	</div>
</main>
