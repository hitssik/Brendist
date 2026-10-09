import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset paths so the build also works under hitssik.github.io/Brendist/
  base: './',
  plugins: [react(), tailwindcss()],
})
