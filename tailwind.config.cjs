/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '376px',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                russisch: ['RussischSans', 'sans-serif'],
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
                bouncy: {
                    '0%': { transform: 'translateY(15%)' },
                    '100%': { transform: 'translateY(-15%)' },
                },
            },
            animation: {
                wave: 'wave 5s alternate ease-in-out infinite',
                bouncy: 'bouncy 800ms alternate ease-out infinite',
            },
        },
    },
};
