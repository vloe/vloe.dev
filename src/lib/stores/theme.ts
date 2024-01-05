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

// set theme class
if (browser) {
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
}

export const theme = writable<Theme>(getThemePreference());

theme.subscribe((value) => {
	if (browser) {
		// upodate theme class
		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else if (value === 'light') {
			document.documentElement.classList.remove('dark');
		}

		// update local storage
		if (value === 'dark') {
			localStorage.setItem('theme', 'dark');
		} else if (value === 'light') {
			localStorage.setItem('theme', 'light');
		}
	}
});
