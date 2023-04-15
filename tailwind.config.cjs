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
                anuphan: ['Anuphan', 'sans-serif'],
            },
            colors: {
                gray: {
                    925: '#0e131f',
                },
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
