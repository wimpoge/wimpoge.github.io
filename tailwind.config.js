/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'josefin': ['Josefin Sans', 'sans-serif'],
      'gowun': ['Gowun Batang', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
