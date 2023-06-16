    import { defineConfig } from 'vite';
    import laravel from 'laravel-vite-plugin';
    import react from '@vitejs/plugin-react';
    // import purgecss from 'vite-plugin-purgecss'

    export default defineConfig({
        plugins: [
            laravel({
                input: 'resources/js/app.tsx',
                ssr: 'resources/js/ssr.jsx',
                refresh: true,
            }),
            react()
        ],
    });
