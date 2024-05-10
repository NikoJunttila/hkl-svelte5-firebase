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
        
"primary": "#d8b4fe",
//buttons
"secondary": "#99f6e4",
//a links
"accent": "#00d581",
        
"neutral": "#f5d0fe",
        
"base-100": "#bef264",

"base-200": "#a3e635",
"base-300": "#16a34a",

"info": "#00a8ce",
        
"success": "#447900",
        
"warning": "#ff8a00",
        
"error": "#ff7c96",
        },
      },
    ],
  },
}

