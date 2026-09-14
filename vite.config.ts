import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
 plugins: [tsconfigPaths(), tanstackStart({
  server: { entry: "server" },
  prerender: { enabled: true, autoSubfolderIndex: true, crawlLinks: false, failOnError: true },
  pages: [{ path: "/" }, { path: "/privacy" }, { path: "/consent" }],
 }), react(), tailwindcss()],
});
