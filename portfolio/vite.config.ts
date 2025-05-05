// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio---Brandon-Johnson/', // <- ✅ update this to match your deploy path
  plugins: [react()],
});
