/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ModerateViolet': 'hsl(263, 55%, 52%)',
        'VeryDarkGrayishBlue': 'hsl(217, 19%, 35%)',
        'VeryDarkBlackishBlue': 'hsl(219, 29%, 14%)',
        'WhitE': 'hsl(0, 0%, 100%)',
        'LightGrayishBlue': 'hsl(210, 46%, 95%)',
        'LightGray': 'hsl(0, 0%, 81%)',
      },
      fontFamily: {
        body: ['Barlow Semi Condensed']
      }
    },
  },
  plugins: [],
}

