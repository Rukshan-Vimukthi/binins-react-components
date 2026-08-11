/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true
  })],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "bininstructions-react-components",
      fileName: "index"
    },
    rollupOptions: {
      external: ["react", "react-dom", "react-bootstrap"],
      output: {
        globals: {
          react: "React",
          "react-bootstrap": "ReactBootstrap"
        }
      }
    }
  },
});