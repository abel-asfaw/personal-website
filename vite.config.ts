import { defineConfig } from 'vite';

import stylex from '@stylexjs/unplugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [stylex.vite(), react()],
});
