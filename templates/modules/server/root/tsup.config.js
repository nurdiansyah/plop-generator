import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts", "src/fastify/index.ts"],
  dts: {
    entry: ["src/index.ts", "src/fastify/index.ts"]
  },
  format: ["esm"],
  outDir: "libs",
  clean: true
});
