/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes: [
      {
        mytheme: {
          "primary": "#ff5e00",     
          "secondary": "#4f1a9e",
          "accent": "#b90ddc",
          "neutral": "#111827",
          "base-100": "#374151",
          "info": "#1f2937",
          "success": "#00ff00",
          "warning": "#facc15",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

