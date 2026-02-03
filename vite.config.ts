import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      firebaseApp: path.resolve(__dirname, "src/firebaseApp"),
      context: path.resolve(__dirname, "src/context"),
    }
  }
})

