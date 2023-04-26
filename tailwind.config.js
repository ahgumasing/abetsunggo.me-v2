let defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: [
        'storyblok/**/*.{vue,js}',
        'components/**/*.{vue,js}',
        'pages/**/*.vue',
    ],

    theme: {},

    plugins: [require('@tailwindcss/typography')],
};
