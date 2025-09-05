import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@views': fileURLToPath(new URL('./src', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  // Ajout de la configuration pour le mode 'preview'
  preview: {
    host: '0.0.0.0', // Permet au serveur d'écouter sur toutes les interfaces réseau
    port: 8080, // Assurez-vous que le port correspond à celui de votre configuration DigitalOcean
    strictPort: true, // Force le port spécifié
    allowedHosts: [
      'lobster-app-z282q.ondigitalocean.app' // Ajoutez le nom de domaine de votre application DigitalOcean
    ]
  },
  // Ajout de la configuration pour le mode 'dev' pour la cohérence
  server: {
    host: '0.0.0.0',
    port: 8080
  }
})