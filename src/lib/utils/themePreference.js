let themePreference;

if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
	themePreference = localStorage.getItem('theme');
} else {
	themePreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const isDark = themePreference === 'dark';
document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
