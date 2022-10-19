import { constantCase } from "@deboxsoft/module-core";

/**
 *
 * @param plop {import("@nurdiansyah/plop").NodePlopAPI}
 */
export const setHelpers = (plop) => {
  plop.setHelper("exceptVar", (varName) => {
    return `{{ ${varName} }}`;
  });
  plop.setHelper("kebabUpperCase", (value) => {
    return constantCase(value, { delimiter: "" });
  });
  plop.setHelper("preCurly", (txt) => {
    return `$\{${txt}`;
  });
};
