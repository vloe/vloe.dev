<script lang="ts">
	const title = "ɣloe"
	const desc = "cs undergrad"
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="title" />
	<meta content={desc} name="description" />
</svelte:head>

<div class="pt-8">
	<main class="flex flex-col space-y-6">
		<article class="flex flex-col gap-y-1.5">
			<h2 class="text-lg font-semibold tracking-tight">about</h2>
			<p>
				currently a second-year undergrad student (prosa@uio). i love building stuff and
				find ml and hacking interesting.
			</p>
		</article>
		<article class="flex flex-col gap-y-1.5">
			<h2 class="text-lg font-semibold tracking-tight">projects</h2>
			<ul class="flex list-disc flex-col gap-y-1 pl-[15px]">
				<li>
					<a href="https://shorter.dev" rel="noopener noreferrer" target="_blank">
						shorter
					</a>
				</li>
			</ul>
		</article>
	</main>
</div>
