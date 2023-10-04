import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "rsn-green-600": "#255137",
        "rsn-green-500": "#476A32",
        "rsn-orange-600": "#FF9E1B",
        "rsn-beige-500": "#E7CDA9",
        "rsn-beige-300": "#F3E4D2",
      },
      backgroundImage: theme => ({
        'bg-hero-desktop': "url('/images/bg-hero-desktop.png')",
        'bg-hero-mobile': "url('/images/bg-hero-mobile.png')",
      }),
      backgroundSize: {
        'mind': '90%',
      }
    },
  },
  plugins: [],
}
export default config
