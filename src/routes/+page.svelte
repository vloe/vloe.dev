<script lang="ts">
	const title = "ɣloe"
	const desc = "cs undergrad"
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="title" />
	<meta content={desc} name="description" />
</svelte:head>

<div class="pt-24">
	<header class="flex h-16 items-center justify-between">
		<div class="flex flex-col justify-center gap-y-0.5">
			<h1 class="text-lg font-semibold tracking-tight">{title}</h1>
			<p class="text-sm">{desc}</p>
		</div>
		<div class="flex items-center gap-x-2">
			<a
				class="text-pink-200 underline underline-offset-4"
				href="https://x.com/vloedev"
				rel="noopener noreferrer"
				target="_blank"
			>
				twitter
			</a>
			/
			<a
				class="text-pink-200 underline underline-offset-4"
				href="https://github.com/vloe"
				rel="noopener noreferrer"
				target="_blank"
			>
				github
			</a>
		</div>
	</header>
</div>

<div class="pt-8">
	<main class="flex flex-col space-y-6">
		<article class="flex flex-col gap-y-1.5">
			<h2 class="text-lg tracking-tight">about</h2>
			<p>
				currently a second-year undergrad student (prosa @ uio). i love building stuff and
				find ml and hacking interesting.
			</p>
		</article>
		<article class="flex flex-col gap-y-1.5">
			<h2 class="text-lg tracking-tight">projects</h2>
			<ul class="flex list-disc flex-col gap-y-1 pl-[15px]">
				<li>
					<a
						class="text-pink-200 underline underline-offset-4"
						href="https://shorter.dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						shorter
					</a>
				</li>
			</ul>
		</article>
	</main>
</div>
