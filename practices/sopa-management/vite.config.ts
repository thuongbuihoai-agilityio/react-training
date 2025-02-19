import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';
import imagePlaceholder from 'vite-plugin-image-placeholder';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin(['VITE_BASE_URL']),
    imagePlaceholder({
      prefix: 'image/placeholder'
    })
  ]
});
