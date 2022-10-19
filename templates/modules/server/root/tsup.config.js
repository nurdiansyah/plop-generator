import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  dts: {
    entry: ["src/index.ts"]
  },
  format: ["esm"],
  outDir: "libs",
  clean: true
});
