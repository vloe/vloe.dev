import { fontFamily } from "tailwindcss/defaultTheme"

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	plugins: [],
	theme: {
		extend: {
			fontFamily: {
				editorial: ["Editorial Sans", ...fontFamily.sans],
				sans: ["Neue Montreal", ...fontFamily.sans],
			},
		},
	},
}
