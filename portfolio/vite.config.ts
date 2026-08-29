import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                tailwindcss(),
                autoprefixer(),
            ],
        },
    },
    server: {
        port: 3000,
        host: true,
        allowedHosts: true, // Allows all sandbox & preview URLs (*.vercel.run)
    },
    preview: {
        port: 3000,
        host: true,
        allowedHosts: true,
    },
});