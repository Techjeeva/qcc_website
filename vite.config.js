import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  //base: '/qcc_website', // Ensures correct asset paths for GitHub Pages deployment
  base: process.env.VITE_BASE_PATH || '/qcc_website', // Use environment variable for base URL, default to '/'
})