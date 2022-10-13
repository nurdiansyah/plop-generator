import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/plopfile.ts", "src/plugins/*"],
  external: ["./bin/*"],
  outDir: "./",
  format: ["esm"],
});
