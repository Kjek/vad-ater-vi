import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api-helper': resolve(__dirname, 'src/server/api/routers/helpers/'),
      '@asset': resolve(__dirname, 'src/components/assets/'),
      '@component': resolve(__dirname, 'src/components/'),
      '@hook': resolve(__dirname, 'src/hooks/'),
      '@page': resolve(__dirname, 'src/pages/'),
      '@provider': resolve(__dirname, 'src/provider/'),
      '@router': resolve(__dirname, 'src/server/api/routers/'),
      '@router/helper': resolve(__dirname, 'src/server/api/routers/helpers/'),
      '@scraper': resolve(__dirname, 'src/server/scrapers/'),
      '@server': resolve(__dirname, 'src/server/'),
      '@type': resolve(__dirname, 'src/types/'),
      '@util': resolve(__dirname, 'src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      include: ['src/**'],
      exclude: ['**/stories/**', '**/env.js'],
    },
  },
});
