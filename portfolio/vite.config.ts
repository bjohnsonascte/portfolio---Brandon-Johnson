import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio---Brandon-Johnson/', // use your actual repo name here
  plugins: [react()],
});
