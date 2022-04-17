import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import styleImport, { VantResolve } from "vite-plugin-style-import";
import { resolve } from "path";
function resolvePath(path) {
  return resolve(__dirname, path);
}

// https://vitejs.dev/config/
export default defineConfig({
  // 静态资源基础路径 base: './' || '',
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  plugins: [
    vue(),
    legacy({ targets: ["chrome 52", "chrome 53", "not IE 11"] }),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  build: {
    outDir: "ec-agreement",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    strictPort: false,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
