<script lang="ts">
	import { theme } from '$lib/stores/theme';
</script>

{#if $theme === 'dark'}
	<button on:click={() => theme.set('light')}>Light</button>
{:else}
	<button on:click={() => theme.set('dark')}>Dark</button>
{/if}
