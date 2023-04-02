/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '370px',
            },
            fontFamily: {
                cubano: ['Cubano', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
            },
            colors: {
                gray: {
                    950: '#0e131f',
                },
            },
        },
    },
};
