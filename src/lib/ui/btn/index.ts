import type { Button as ButtonPrimitive } from "bits-ui"
import type { VariantProps } from "cva"
import type { Snippet } from "svelte"

import { cva } from "$lib/utils/cva.config"

import Btn from "./btn.svelte"

const btnVariants = cva({
	base: "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none",
	variants: {
		intent: {
			ghost: "text-white hover:bg-white/15",
			gradient: "btn-gradient border-shpurple border text-white",
			primary: "bg-white text-black shadow hover:bg-white/85",
			secondary: "text-white hover:text-white/85",
		},
		size: {
			default: "px-3.5 py-1.5",
			icon: "px-2 py-1.5",
		},
	},
})

type Variants = VariantProps<typeof btnVariants>
type Intent = Variants["intent"]
type Size = Variants["size"]

type BtnProps = {
	children: Snippet
	intent?: Intent
	size?: Size
} & ButtonPrimitive.Props

export { Btn, type BtnProps, btnVariants }
