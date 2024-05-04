export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#868484',
      },
      screens: {
        'sm':'576px',
        'md': '820px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}