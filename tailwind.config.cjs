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
            },
            textShadow: {
                sm: '0 0 4px var(--tw-shadow-color)',
                DEFAULT: '0 0 8px var(--tw-shadow-color)',
                lg: '0 0px 16px var(--tw-shadow-color)',
            },
        },
    },
};
