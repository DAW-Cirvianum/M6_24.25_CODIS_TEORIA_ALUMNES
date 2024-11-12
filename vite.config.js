import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'UF4/Weather-API'), // Canvia 'UF4/Weather-API' segons la ruta de la carpeta
  build: {
    outDir: path.resolve(__dirname, 'UF4/Weather-API/dist'), // Defineix la carpeta de sortida dins `Weather-API`
  },
  server: {
    open: true, // Obre automàticament el navegador quan executis Vite
  },
})
