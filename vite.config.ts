import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

declare const process: { env: Record<string, string | undefined> };

const plugins: PluginOption[] = [react()];
if (process.env.ANALYZE) {
  plugins.push(visualizer({ open: true, filename: 'dist/stats.html' }));
}

// https://vite.dev/config/
export default defineConfig({
  plugins,
  // Layer aliases; keep in sync with `paths` in tsconfig.app.json. See docs/ARCHITECTURE.md.
  resolve: {
    alias: {
      '@app': '/src/app',
      '@core': '/src/core',
      '@shared': '/src/shared',
      '@features': '/src/features'
    }
  },
  base: '/'
});
