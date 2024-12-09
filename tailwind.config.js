/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Hooks/**/*.{js,ts,jsx,tsx,mdx}",
    './utilities/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontWeight: {
        'custom-weight': 550,
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #EE4197 0%, #FFFFFF 56.61%)',
      },
    },
  },
  plugins: [],
};
