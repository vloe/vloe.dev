import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const getThemePreference = (): Theme => {
	if (browser) {
		// local storage
		if (localStorage.getItem('theme') === 'dark') {
			return 'dark';
		}
		if (localStorage.getItem('theme') === 'light') {
			return 'light';
		}

		// system preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
	}
	return 'light';
};

export const theme = writable<Theme>(getThemePreference());

theme.subscribe((value) => {
	if (browser) {
		const isDark = value === 'dark';

		// upodate theme in css
		document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

		// update theme in local storage
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}
});
