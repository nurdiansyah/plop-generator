/// <reference types="vitest" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.{it,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  }
});
