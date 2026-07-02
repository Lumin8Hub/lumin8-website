import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Base path resolution:
// - Custom domain (public/CNAME exists): site is served from the domain root -> "/".
//   At lumin8.agency cutover, add `public/CNAME` containing "lumin8.agency" and this
//   flips automatically — no config edit needed.
// - CI build without a CNAME: GitHub Pages serves the project page under
//   /lumin8-website/, so assets must be referenced from that subpath.
// - Local dev/preview: "/".
const hasCustomDomain = fs.existsSync(path.resolve(__dirname, "public/CNAME"));
const base = process.env.GITHUB_ACTIONS && !hasCustomDomain ? "/lumin8-website/" : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
