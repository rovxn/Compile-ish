/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  
  theme: {
    extend: {
      backgroundImage:{
        "bg-hero": "url('/img/bg.png')",
      },
    },
  },
  plugins: [],
}

