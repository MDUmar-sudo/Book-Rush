import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv";
import path from 'path';

dotenv.config({ path: path.resolve('./frontend/.env') }); // Loading environment variables from .env

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        /* 
        target: 'http://localhost:3000', // backend server for local development
        */
        target: import.meta.env.VITE_API_URL, // backend root
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
