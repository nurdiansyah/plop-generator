import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts", "src/svelte/index.ts"],
  dts: {
    entry: ["src/index.ts", "src/svelte/index.ts"]
  },
  outDir: "libs",
  format: ["esm"],
  clean: true
});
