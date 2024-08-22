<script lang="ts">
	const title = "vloe"
	const desc = "cs undergrad"
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="title" />
	<meta content={desc} name="description" />
</svelte:head>

<div class="pt-8">
	<main class="flex flex-col space-y-6">
		<article class="flex flex-col space-y-3">
			<h2 class="text-lg tracking-tight">about</h2>
			<p>
				hi, i'm a second-year cs undergrad at the university of oslo. looking for a swe
				internship summer '25, <a href="mailto:niklaa@uio.no"> hmu</a>(:
			</p>
		</article>
		<article class="flex flex-col space-y-3">
			<h2 class="text-lg tracking-tight">projects</h2>
			<ul class="list-disc space-y-2 pl-[15px]">
				<li>
					<a href="https://shorter.dev" rel="noopener noreferrer" target="_blank">
						shorter
					</a>
				</li>
				<li>
					<a
						href="https://github.com/vloe/vloe.dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						vloe.dev
					</a>
				</li>
				<li>
					<a
						href="https://github.com/vloe/nvim"
						rel="noopener noreferrer"
						target="_blank"
					>
						nvim
					</a>
				</li>
			</ul>
		</article>
	</main>
</div>
