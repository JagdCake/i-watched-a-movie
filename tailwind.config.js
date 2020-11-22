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
                'about-section': 'height, opacity, visibility',
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
                316: '79rem',
            },
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
        extend: {
            fontWeight: ['hover', 'focus'],
        },
    },
    plugins: [],
    purge: {
        content: ['./src/**/*.tsx', './src/**/*.jsx'],
        // PurgeCSS options
        options: {
            whitelist: [],
        },
    },
};
