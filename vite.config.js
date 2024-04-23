// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({

    server: {
        Proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
            }
        }
    },

    plugins: [react()],

});
