## architecture

a static site built with [sveltekit](https://kit.svelte.dev) and deployed to [cloudflare pages](https://pages.cloudflare.com):

```typescript src/routes/%2Blayout.ts
import { dev } from "$app/environment"

export const prerender = true // ssg
export const csr = dev // no js is shipped to the client (enabled in dev for hmr)
```

## credits

design inspired by [shadcn](https://shadcn.com).
