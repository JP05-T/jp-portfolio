import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // 👈 important for custom domains (Netlify)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
