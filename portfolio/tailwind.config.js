/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: "#06080F",
                surface: "#0B101E",
                surfaceLight: "#12192E",
                accent: {
                    cyan: "#00F0FF",
                    emerald: "#10B981",
                    purple: "#8B5CF6",
                    blue: "#3B82F6"
                }
            },
            fontFamily: {
                mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
                sans: ['Inter', 'system-ui', 'sans-serif']
            }
        },
    },
    plugins: [],
}