/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#fef08a",

          "secondary": "#059669",
         
          "accent": "#00ffff",
         
          "neutral": "#9333ea",
         
          "base-100": "#c084fc",
         
          "info": "#60a5fa",
         
          "success": "#4ade80",
         
          "warning": "#eab308",
         
          "error": "#f43f5e",
        },
      },
    ],
  },
}

