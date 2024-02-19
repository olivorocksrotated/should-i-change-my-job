import path from 'path';
import { defineConfig } from 'vitest/config';

/**
 * Config https://vitest.dev/config/
 * Snapshot testing https://vitest.dev/guide/snapshot
 * Preview https://www.vitest-preview.com/guide/getting-started
 */
export default defineConfig({
    test: {
        css: true,
        environment: 'jsdom',
        reporters: ['basic'],
        coverage: {
            reporter: ['text-summary']
        },
        clearMocks: true,
        setupFiles: [
            './src/lib/tests/matchers.ts',
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
