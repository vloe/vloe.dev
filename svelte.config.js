import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			paths: {
				base: "", // set base path to empty string for root domain
				relative: false, // set relative to false
			},
		}),
	},
}

export default config
