import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: { DEFAULT: "1.5rem", lg: "2rem" },
			screens: { "2xl": "1200px" },
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				/* Algolia palette (fixed — gradients, focus rings) */
				algolia: {
					blue: "#003dff",
					cobalt: "#1e59ff",
					violet: "#b75aff",
					ring: "#3b82f6",
				},
				/* Brand tokens (theme-aware via CSS vars) */
				canvas: "hsl(var(--canvas) / <alpha-value>)",
				ink: {
					DEFAULT: "hsl(var(--ink) / <alpha-value>)",
					soft: "hsl(var(--ink-soft) / <alpha-value>)",
					muted: "hsl(var(--ink-muted) / <alpha-value>)",
					secondary: "hsl(var(--ink-secondary) / <alpha-value>)",
				},
				surface: "hsl(var(--surface) / <alpha-value>)",
				hairline: {
					DEFAULT: "hsl(var(--hairline) / <alpha-value>)",
					cool: "hsl(var(--hairline-cool) / <alpha-value>)",
				},
				deep: "#000033",
				"link-active": "#2563eb",
				caption: "#9698c3",
			},
			borderRadius: {
				xl: "12px",
				lg: "12px",
				md: "8px",
				sm: "6px",
				xs: "2px",
			},
			fontFamily: {
				display: ["Sora", "system-ui", "sans-serif"],
				sans: ["Inter", "system-ui", "sans-serif"],
				sora: ["Sora", "sans-serif"],
			},
			maxWidth: {
				editorial: "1080px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
