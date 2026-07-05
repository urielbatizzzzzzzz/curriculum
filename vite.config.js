import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en https://urielbatizzzzzzzz.github.io/curriculum/
// Por eso 'base' debe coincidir con el nombre del repositorio.
export default defineConfig({
  plugins: [react()],
  base: '/curriculum/',
})
