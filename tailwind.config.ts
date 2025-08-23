import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './lib/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: [
                    'Fraunces',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'serif',
                ],
                sans: [
                    'DM Sans',
                    'system-ui',
                    '-apple-system',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
            },
            fontSize: {
                hero: [
                    'clamp(3rem, 6vw, 5rem)',
                    { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '400' },
                ],
                section: ['clamp(1.75rem, 4vw, 2rem)', { lineHeight: '1.2', fontWeight: '600' }],
                body: ['1.125rem', { lineHeight: '1.5' }],
                eyebrow: [
                    '0.75rem',
                    {
                        lineHeight: '1.4',
                        letterSpacing: '0.14em',
                    },
                ],
            },
            fontWeight: {
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
            },
            screens: {
                xs: '480px',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            borderRadius: {
                DEFAULT: '0px',
                lg: '0px',
                md: '0px',
                sm: '0px',
            },
            boxShadow: {
                subtle: '0 12px 28px rgba(17, 18, 22, 0.06)',
                card: '0 8px 24px rgba(17, 18, 22, 0.12)',
            },
            colors: {
                porcelain: 'rgb(var(--background-porcelain) / <alpha-value>)',
                ink: 'rgb(var(--text-ink) / <alpha-value>)',
                muted: 'rgb(var(--text-muted) / <alpha-value>)',
                hairline: 'rgb(var(--border-hairline) / <alpha-value>)',
                'brand-blue': 'rgb(var(--brand-blue) / <alpha-value>)',
                'brand-purple': 'rgb(var(--brand-purple) / <alpha-value>)',
                'cobalt-blue': 'rgb(var(--cobalt-blue) / <alpha-value>)',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },

                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
