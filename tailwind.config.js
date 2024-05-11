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

          "secondary": "#e7e5e4",
         
          "accent": "#00ffff",
         
          "neutral": "#9333ea",
         
          "base-100": "#c084fc",
         
          "info": "#60a5fa",
         
          "success": "#4ade80",
         
          "warning": "#eab308",
         
          "error": "#f43f5e",
/* "primary": "#d8b4fe",
//buttons
"secondary": "#99f6e4",
//a links
"accent": "#00d581",
        
"neutral": "#f5d0fe",
        
"base-100": "#bef264",



"info": "#00a8ce",
        
"success": "#447900",
        
"warning": "#ff8a00",
        
"error": "#ff7c96", */
        },
      },
    ],
  },
}

