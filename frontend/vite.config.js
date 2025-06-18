import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (e.g., 'development', 'production')
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_LIVE_API_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
