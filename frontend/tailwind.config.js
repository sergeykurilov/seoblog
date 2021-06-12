const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            primary: '#5c6ac4',
            white: '#fff',
        },
        borderColor: (theme) => ({
            ...theme(colors),
            DEFAULT: theme('colors.gray.300', 'currentColor'),
            'primary': '#3490dc',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        fontFamily: {
            'body': ['Open Sans']
        },
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            tableLayout: ['hover', 'focus'],
            cyan: colors.cyan,
        }
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
