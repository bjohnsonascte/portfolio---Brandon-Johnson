import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Important: matches your GitHub repo name
export default defineConfig({
  base: '/portfolio/', // 👈 this must match your GitHub repo name exactly
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
});
