import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build can also be opened from a static host sub-path.
  base: './',
  server: {
    port: 5173,
    strictPort: true,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsDir: 'assets',
  },
});
