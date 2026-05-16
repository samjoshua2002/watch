import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#333',
        accent: '#c41e3a',
        'accent-dark': '#a01830',
        gold: '#C9A96E',
        'text-main': '#1a1a1a',
        'text-light': '#666',
        'text-muted': '#999',
        'bg-main': '#ffffff',
        'bg-light': '#f5f5f5',
        'bg-gray': '#f0f0f0',
        'border-main': '#e0e0e0',
        'border-light': '#eee',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
