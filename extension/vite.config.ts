import { defineConfig } from "vite";
import { join } from "path";

export default defineConfig({
  build: {
    target: "node21",
    lib: {
      entry: join(process.cwd(), "src", "extension.ts"),
      name: "index",
      fileName: (format) => `extension.${format}.js`,
    },
    rollupOptions: {
      external: ["vscode", "typescript"],
      output: {
        format: "cjs",
      },
    },
    outDir: join(process.cwd(), "dist"),
    emptyOutDir: false,
  },
});