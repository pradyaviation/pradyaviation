
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
			padding: {
				DEFAULT: '1rem',
				'xxs': '0.5rem',
				'xs': '0.75rem',
				'sm': '1rem',
				'md': '1.5rem',
				'lg': '2rem',
				'xl': '2.5rem',
				'2xl': '3rem',
			},
			screens: {
				'xxs': '100%',
				'xs': '100%',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		screens: {
			'xxs': '320px',  // Very small devices (iPhone SE, etc.)
			'xs': '375px',   // Small devices (iPhone 12 mini, etc.)
			'sm': '640px',   // Large phones / small tablets
			'md': '768px',   // Tablets
			'lg': '1024px',  // Small desktop
			'xl': '1280px',  // Desktop
			'2xl': '1536px', // Large desktop
			'3xl': '1920px', // Ultra-wide screens
		},
		extend: {
			fontFamily: {
				'ddin': ['D-DIN', 'Arial', 'Verdana', 'sans-serif'],
				'system': ['Arial', 'Verdana', 'sans-serif'],
			},
			fontSize: {
				'xxs': ['0.65rem', { lineHeight: '1' }],
				'2xs': ['0.7rem', { lineHeight: '1.1' }],
				'xs': ['0.75rem', { lineHeight: '1.2' }],
				'sm': ['0.875rem', { lineHeight: '1.3' }],
				'base': ['1rem', { lineHeight: '1.4' }],
				'lg': ['1.125rem', { lineHeight: '1.5' }],
				'xl': ['1.25rem', { lineHeight: '1.5' }],
				'2xl': ['1.5rem', { lineHeight: '1.4' }],
				'3xl': ['1.875rem', { lineHeight: '1.3' }],
				'4xl': ['2.25rem', { lineHeight: '1.2' }],
				'5xl': ['3rem', { lineHeight: '1.1' }],
				'6xl': ['3.75rem', { lineHeight: '1' }],
				'7xl': ['4.5rem', { lineHeight: '1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
			},
			spacing: {
				'xxs': '0.25rem',
				'xs': '0.5rem',
				'18': '4.5rem',
				'22': '5.5rem',
				'88': '22rem',
				'92': '23rem',
				'96': '24rem',
				'100': '25rem',
				'104': '26rem',
				'108': '27rem',
				'112': '28rem',
				'116': '29rem',
				'120': '30rem',
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
				airavata: {
					black: '#000000',
					blue: '#00D4FF',
					'blue-glow': '#4DE6FF',
					gray: '#262626',
					'light-gray': '#D9D9D9',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
					'100%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' }
				},
				'neural-pulse': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'propeller-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite alternate',
				'neural-pulse': 'neural-pulse 4s ease-in-out infinite',
				'propeller-spin': 'propeller-spin 0.1s linear infinite'
			}
		}
	},
	plugins: [
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require("tailwindcss-animate")
	],
} satisfies Config;
