<script lang="ts">
	const title = "vloe"
	const desc = "cs student"
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={desc} />
</svelte:head>

<div class="mt-6">
	<main class="flex flex-col space-y-6">
		<article class="flex flex-col space-y-3">
			<h2 class="font-mono text-lg tracking-tighter">about</h2>
			<p class="text-sm text-muted-foreground">
				hi, i'm a cs student at the university of oslo. i'm looking for a summer internship.
				contact me: <span class="font-bold">niklaa at uio dot no</span>.
			</p>
		</article>
		<article class="flex flex-col space-y-3">
			<h2 class="font-mono text-lg tracking-tighter">projects</h2>
			<ul class="space-y-4">
				<li>
					<a href="https://shorter.dev">
						<div class="flex flex-col space-y-1.5 text-sm">
							<div>
								<span class="font-medium underline underline-offset-4">shorter</span
								>
								<span
									class="ml-2 rounded-lg bg-primary px-2 py-0.5 font-mono text-xs text-primary-foreground"
								>
									wip
								</span>
							</div>
							<span class="text-muted-foreground">a domain shortener tool</span>
						</div>
					</a>
				</li>
				<li>
					<a href="/">
						<div class="flex flex-col space-y-1.5 text-sm">
							<span class="font-medium underline underline-offset-4">vloe.dev</span>
							<span class="text-muted-foreground">a minimal personal site</span>
						</div>
					</a>
				</li>
				<li>
					<a href="https://github.com/vloe/nvim">
						<div class="flex flex-col space-y-1.5 text-sm">
							<span class="font-medium underline underline-offset-4">nvim</span>
							<span class="text-muted-foreground">my nvim config</span>
						</div>
					</a>
				</li>
			</ul>
		</article>
	</main>
</div>
