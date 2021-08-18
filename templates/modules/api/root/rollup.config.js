import bundle from "@nurdiansyah/rollup/configs/module.config";

export default bundle(
  {
    name: "usersServer",
    input: "src/index.ts",
    output: "index.js"
  },
  {}
);
