import { defineConfig } from "windicss/helpers";
import lineClampPlugin from "windicss/plugin/line-clamp";
import typographyPlugin from "windicss/plugin/typography";
import tailwindConfig from "./tailwind.config.cjs";

export default defineConfig({
  plugins: [
    lineClampPlugin,
    typographyPlugin,
    ({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme("fontSize.2xl")[0], ...theme("fontSize.2xl")[1] },
        h2: { fontSize: theme("fontSize.xl")[0] },
        h3: { fontSize: theme("fontSize.lg")[0] },
        h4: { fontSize: theme("fontSize.base")[0] },
        h6: { fontSize: theme("fontSize.sm")[0] }
      });
    }
  ],
  extract: {
    include: ["src/**/*", "node_modules/@deboxsoft/svelte-themes/**/*", "node_modules/@deboxsoft/svelte-ui-base/**/*"]
  },
  theme: tailwindConfig.theme
});
