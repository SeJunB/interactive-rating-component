/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'orange': 'hsl(25, 97%, 53%)',
                'light-gray': 'hsl(217, 12%, 63%)',
                'medium-grey': 'hsl(216, 12%, 54%)',
                'dark-blue': 'hsl(213, 19%, 18%)',
                'very-dark-blue': 'hsl(216, 12%, 8%)'
            }
        },
    },
    plugins: [],
}

