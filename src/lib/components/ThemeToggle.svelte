<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import Button from '$lib/components/Button.svelte';
	import Moon from '$lib/icons/Moon.svelte';
	import Sun from '$lib/icons/Sun.svelte';

	$: isDark = $theme === 'dark';
</script>

<Button variant="ghost" size="xs" on:click={() => theme.set(isDark ? 'light' : 'dark')}>
	<Moon class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
	<Sun class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
</Button>

<!-- set theme in css (head to avoid fouc) -->
<svelte:head>
	<script>
		const getThemePreference = () => {
			if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
				return localStorage.getItem('theme');
			}
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		};
		const isDark = getThemePreference() === 'dark';
		document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
	</script>
</svelte:head>
