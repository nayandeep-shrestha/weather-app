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
        'tablet': '640px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}