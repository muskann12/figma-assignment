/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customPink: 'var(--customPink)',
        customBlue: 'var(--customBlue)',
      },
      fontFamily: {
        heebo: ['Heebo', 'serif', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        customShadow: '0 4px 4px 0 #4141418a',
      },
    },
  },
  plugins: [],
};

export default config;
