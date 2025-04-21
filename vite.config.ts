import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import svgr from "vite-plugin-svgr";

const aliases = {
  "@": fileURLToPath(new URL("./src", import.meta.url)),
  "~": fileURLToPath(new URL("./", import.meta.url)),
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      eslintPlugin({ cache: false }),
      svgr({ svgrOptions: { icon: true } }),
    ],
    resolve: {
      alias: aliases,
    },
    server: {
      host: "0.0.0.0",
      port: 8080,
    },
    define: {
      __version: JSON.stringify(process.env.npm_package_version),
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(
        env.VITE_API_BASE_URL,
      ),
      "process.env.VITE_API_BASE_URL": JSON.stringify(env.VITE_API_BASE_URL),
    },
  };
});
