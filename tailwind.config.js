module.exports = {
    theme: {
        screens: {
            sm: '414px',
            md: '576px',
            lg: '768px',
            xl: '1156px',
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
        },
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
    },
    plugins: [],
};
