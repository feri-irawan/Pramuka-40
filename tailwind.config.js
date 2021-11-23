module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.600'),
                        a: {
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        },
                    },
                },

                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        h1: {color: theme('colors.gray.300')},
                        h2: {color: theme('colors.gray.300')},
                        h3: {color: theme('colors.gray.300')},
                        h4: {color: theme('colors.gray.300')},
                        h5: {color: theme('colors.gray.300')},
                        h6: {color: theme('colors.gray.300')},
                    },
                },
            }),
        },

        fontFamily: {
            inter: '"Inter", sans-serif',
        },
    },
    variants: {
        extend: {
            fontWeight: ['hover'],
            typography: ['dark'],
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
