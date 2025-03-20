import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Ensure it's correctly imported

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Correct way to use TailwindCSS with Vite
  ],
  base: "/campaign-website/", // Set the base path for GitHub Pages deployment
});
