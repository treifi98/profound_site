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
        'w-[33.68px]',
        // 'h-[19.24px]',
        'w-[38.01px]',
        'h-[21.72px]',
        'w-[12.38px]',
        'h-[12.38px]',
        'w-[56.68px]',
        'h-[56.68px]',
        'w-[50.38px]',
        'h-[50.38px]',
        'w-[50px]',
        'h-[50px]',
        'w-[363px]',
        'h-[287px]',
        'w-[398px]',
        'h-[636px]',
        'w-[58.79px]',
        'h-[12.53px]',
        'w-[34px]',
        'h-[34px]',
        'w-[19.24px]',
        'h-[19.24px]',
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
                }
              },
              animation: {
                wiggle: 'wiggle 0.5s ease-in-out forwards',
              }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
