/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './node_modules/@nuxt/ui/dist/**/*.{vue,js,mjs}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], // Основной шрифт для текста
                league: ['League Gothic', 'sans-serif'], // Шрифт League Gothic
                mulish: ['Mulish', 'sans-serif'],
            },
            fontSize: {
                kitanik: '322px',
                h1: '150px',
                h2: '128px',
                h3: '55px',
                subhead: '32px',
                body: '18px',
                button: '18px',
                filter: '16px',
            },
            colors: {
                'kitanik-purple': {
                    50: '#F4F1FF',
                    100: '#E9E3FF',
                    200: '#D1C7FF',
                    300: '#B8ABFF',
                    400: '#A090FF',
                    500: '#7E4FFF',
                    600: '#6540CC',
                    700: '#4C3099',
                    800: '#332066',
                    900: '#191033',
                },
                white: '#FDFCFF',
                black: '#272431',
                'pure-black': '#000000',
            },
            screens: {
                figma: '1440px', // Фрейм из Figma
            },
        },
    },
    plugins: [],
};
