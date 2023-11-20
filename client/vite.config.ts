import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/english-bonfire-project/client/",
  resolve: {
    alias: {
      src: "/src",
      assets: "/src/assets",
      footer: "/src/components/footer",
      header: "/src/components/header",
      main: "/src/components/main",
      hooks: "/src/hooks",
      shared: "/src/shared",
      store: "/src/store",
    },
  },
});
