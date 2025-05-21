
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
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Montserrat"', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			colors: {
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Modern minimal color palette
				'slate-50': '#F8FAFC',
				'slate-100': '#F1F5F9',
				'slate-200': '#E2E8F0',
				'slate-300': '#CBD5E1',
				'slate-400': '#94A3B8',
				'slate-500': '#64748B',
				'slate-600': '#475569',
				'slate-700': '#334155',
				'slate-800': '#1E293B',
				'slate-900': '#0F172A',
				'blue-50': '#EFF6FF',
				'blue-100': '#DBEAFE',
				'blue-200': '#BFDBFE',
				'blue-300': '#93C5FD',
				'blue-400': '#60A5FA',
				'blue-500': '#3B82F6',
				'blue-600': '#2563EB',
				'blue-700': '#1D4ED8',
				'teal-50': '#F0FDFA',
				'teal-100': '#CCFBF1',
				'teal-200': '#99F6E4',
				'teal-500': '#14B8A6',
				'teal-600': '#0D9488',
				'gray-50': '#F9FAFB',
				'gray-100': '#F3F4F6',
				'gray-200': '#E5E7EB',
				'gray-300': '#D1D5DB',
				'gray-400': '#9CA3AF',
				'gray-500': '#6B7280',
				'gray-600': '#4B5563',
				'gray-700': '#374151',
				'gray-800': '#1F2937',
				'navy': '#0F172A',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'subtle-float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-5px)'
					}
				},
				'subtle-pulse': {
					'0%, 100%': {
						opacity: '0.8'
					},
					'50%': {
						opacity: '1'
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
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-1000px 0'
					},
					'100%': {
						backgroundPosition: '1000px 0'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.3s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'subtle-float': 'subtle-float 4s ease-in-out infinite',
				'subtle-pulse': 'subtle-pulse 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s infinite linear',
			},
			backgroundImage: {
				'hero-pattern': "url('/lovable-uploads/hero-pattern.svg')",
				'dots-pattern': "url('/lovable-uploads/dots-pattern.svg')",
				'wave-pattern': "url('/lovable-uploads/wave-pattern.svg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
