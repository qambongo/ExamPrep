import { defineConfig } from 'vite'

// `npm run build`     -> standalone build in ./dist
// `npm run build:hub` -> build served by the Practice Hub at /security-plus-guide/
export default defineConfig(({ mode }) => {
  const hub = mode === 'hub'
  return {
    root: '.',
    base: hub ? '/security-plus-guide/' : '/',
    build: {
      outDir: hub ? '../security-plus-guide' : 'dist',
      emptyOutDir: true,
      minify: false,
      rollupOptions: {
        input: { main: './index.html' },
      },
    },
  }
})
