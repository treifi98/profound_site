const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    safelist: [
        'w-[83px]',
        'h-[101px]',
        'w-[116px]',
        'h-[24px]',
        'w-[142px]',
        'h-[27px]',
      ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                wiggle: {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-5px)' },
                    '100%': { transform: 'translateY(0px)' },
                    // '50%': { transform: 'translateY(-5px)' },
                    // '75%': { transform: 'translateY(5px)' },
                    // '100%': { transform: 'translateY(5px)' },
                }
              },
              animation: {
                wiggle: 'wiggle 0.5s ease-in-out infinite',
              }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
