// vite.config.js
import { defineConfig } from 'vite';
import gltf from 'vite-plugin-gltf';
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  publicDir: '../public/',
  base:"./",
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
       }
    },
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [gltf({})],
  
});