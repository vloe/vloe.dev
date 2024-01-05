<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="container max-w-screen-sm px-8">
	<Navbar />
	<slot />
</div>
