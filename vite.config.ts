// vite.config.ts

import { defineConfig } from 'vite';
// ... otras importaciones

export default defineConfig(({ mode }) => ({
  server: {
    // Escucha en todas las interfaces de red
    host: '0.0.0.0', 
    // Usa el puerto que configuraste para tu app
    port: 5000, 
    // Habilita el HMR para entornos de contenedor
    hmr: {
        host: '6d768673-3c1c-4714-8282-62270a0e24c9-00-bvo30qd7ieu8.riker.replit.dev',
        port: 443, // 443 es el puerto estándar para HTTPS
    }
    // Si la solución de HMR no funciona, prueba con:
    // host: '6d768673-3c1c-4714-8282-62270a0e24c9-00-bvo30qd7ieu8.riker.replit.dev',
    // watch: {
    //     usePolling: true
    // }
    host: "0.0.0.0",
    port: 5000,

  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
//...

    allowedHosts: 'all', // <-- AÑADE ESTA LÍNEA
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
