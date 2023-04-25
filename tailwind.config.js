module.exports = {
    darkMode: 'class',
    content: [
        'storyblok/**/*.{vue,js}',
        'components/**/*.{vue,js}',
        'pages/**/*.vue',
    ],

    plugins: [require('@tailwindcss/typography')],
};
