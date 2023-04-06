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
                    925: '#0e131f',
                },
            },
            keyframes: {
                wave: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '100%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
            animation: {
                wave: 'wave 5s alternate infinite',
            },
        },
    },
};
