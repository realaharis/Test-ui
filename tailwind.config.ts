import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tg: {
          bg: '#0f0f0f',
          sidebar: '#181818',
          primary: '#8774e1',
          secondary: '#212121',
          hover: '#2c2c2c',
          text: '#ffffff',
          muted: '#aaaaaa',
        }
      }
    },
  },
  plugins: [],
}

export default config
