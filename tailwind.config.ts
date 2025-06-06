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
			padding: '2rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Inter"', '"Poppins"', '"Helvetica Neue"', 'sans-serif'],
				mono: ['"IBM Plex Mono"', 'monospace'],
				body: ['"Inter"', 'sans-serif'],
			},
			colors: {
				// Monochromatic palette
				black: '#000000',
				white: '#FFFFFF',
				'off-white': '#F5F5F5',
				'light-grey': '#F9F9F9',
				'border-grey': '#E0E0E0',
				'input-border': '#CCCCCC',
				'mid-grey': '#555555',
				'deep-grey': '#222222',
				
				// Accent color - burnt orange
				accent: '#D35400',
				'accent-hover': '#A04000',
				'accent-light': '#E67E22',
				gold: '#F39C12',
				beige: '#F5F5F5',
				
				// Keep system colors for components
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 0.1rem)',
				sm: 'calc(var(--radius) - 0.2rem)'
			},
			spacing: {
				'section': '60px',
			},
			maxWidth: {
				'content': '1200px',
			},
			lineHeight: {
				'readable': '1.6',
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(8px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'subtle-float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-3px)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					},
					'100%': {
						backgroundPosition: '0% 50%'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'subtle-float': 'subtle-float 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
