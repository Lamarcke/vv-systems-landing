/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        fontFamily:{
            'header': 'Ubiquitous, sans-serif',
        },
    },
    content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ["light", "dark", {"vv-systems": {
            ...require("daisyui/src/colors/themes")["[data-theme=light]"],
            "primary": "#004276",
            "secondary": "#004478",
            "info": "#002038",
          }},]
      }
};
