      // vite.config.ts

      import { defineConfig } from "vite";
      import react from "@vitejs/plugin-react-swc";
      import path from "path";
      import { componentTagger } from "lovable-tagger";

      export default defineConfig(({ mode }) => ({

        server: {
          // 1. Configuración principal del servidor (para Replit y Local)
          host: "0.0.0.0",
          port: 5000,

          // 2. Configuración HMR (para recarga rápida en Replit)
          // El 'allowedHosts' de Replit ya no es necesario aquí si se usa HMR, pero lo simplificamos:
          hmr: {
            host: '6d768673-3c1c-4714-8282-62270a0e24c9-00-bvo30qd7ieu8.riker.replit.dev',
            port: 443, // Puerto estándar para HTTPS
          },

          // 3. Permitir conexión desde hosts de Replit (Medida de seguridad extra)
          allowedHosts: ['.replit.dev', 'all'], // Usamos '.replit.dev' y 'all' para máxima compatibilidad
        },

        plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

        resolve: {
          alias: {
            "@": path.resolve(__dirname, "./src"),
          },
        },
      }));