/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '376px',
                sm: '800px',
            },
            fontFamily: {
                cubano: ['Cubano', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                russisch: ['RussischSans', 'sans'],
            },
            keyframes: {
                wave: {
                    '0%': {
                        'background-size': '400% 400%',
                        'background-position': 'left',
                    },
                    '100%': {
                        'background-size': '400% 400%',
                        'background-position': 'right',
                    },
                },
            },
            animation: {
                wave: 'wave 5s alternate ease-in-out infinite',
            },
        },
    },
};
