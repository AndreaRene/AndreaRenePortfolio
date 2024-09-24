import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/AndreaRenePortfolio/',
  plugins: [react(), svgr()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    watch: {
      usePolling: true
    }
  }
});
