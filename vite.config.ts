import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: './src/index.js',
      name: 'chatWidget',
      formats: ['iife'], // Compiles to an immediately-invoked function expression
      fileName: (format) => `chat-widget.${format}.js`
    },
    rollupOptions: {
      // Ensure SolidJS is bundled with your component
      external: [],
    }
  },
})
