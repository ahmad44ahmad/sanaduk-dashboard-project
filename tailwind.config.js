/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0e7490', // Cobalt/Teal mix for Sanaduk
                secondary: '#64748b', // Slate for mountains
            }
        },
    },
    plugins: [],
}
