module.exports = {
    theme: {
        screens: {
            // small phones
            sm: '414px',
            // big phones
            md: '576px',
            // tablets
            lg: '768px',
            // large screens
            xl: '1024px',
            // larger screens
            '2xl': '1440px',
            // desktop
            '3xl': '1920px',
            // big desktop
            '4xl': '2560px',
            // bigger desktop
            '5xl': '3840px',
        },
        extend: {
            colors: {
                black: '#111',
                red: '#d05353',
            },
            transitionProperty: {
                'height-opacity': 'height, opacity',
            },
            fontFamily: {
                slackey: ['Slackey', 'serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
            width: {
                '27p': '27%',
                '9p': '9.7%',
            },
            margin: {
                92: '23rem',
                184: '46rem',
            },
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
    },
    plugins: [],
};
