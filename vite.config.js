import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/aditya-portfolio/', // <--- यह लाइन जोड़ना अनिवार्य है!
})