import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'Sign in with Matrix',
    }
  },
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })]
})
