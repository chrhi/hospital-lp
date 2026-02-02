import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  // Dev should run at http://localhost:5173/
  // Build/deploy (e.g. GitHub Pages) can still be served from /Hospital-Website/
  base:'/hospital-lp',
}));
