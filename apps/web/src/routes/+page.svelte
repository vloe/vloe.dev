<script lang="ts">
	const title = "ɣloe"
	const desc =
		"currently a second-year undergrad student (prosa @ uio). i like building stuff and find ml interesting."
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={title} name="title" />
	<meta content={desc} name="description" />
</svelte:head>

<h1>{title}</h1>
<p>{desc}</p>

<h2>projects</h2>
<ul>
	<li>
		<a href="https://shorter.dev" rel="noopener noreferrer" target="_blank"> shorter </a>
	</li>
</ul>
