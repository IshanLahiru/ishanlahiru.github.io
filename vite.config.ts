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
  base: '/'
});
