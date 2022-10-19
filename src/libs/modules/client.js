import { pascalCase } from "@deboxsoft/module-core";
import { templateFilesGenerator, createAppendAction } from "../../core/index.js";
import fs from "fs";

/**
 * @param opts {import("../../types").GeneratorOptions}
 * @return {function({actions?: *, templateDir: *, path: *, data?: *}): *[]}
 */
export const moduleClientGenerator =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const isMonorepo = data.isMonorepo;
    const model = pascalCase(data.model),
      modulePackage = "client",
      rootPath = `${path}${isMonorepo ? `/${modulePackage}` : ""}`,
      srcPath = `${rootPath}/src`;
    templateDir = `${templateDir}/${modulePackage}`;
    data.modulePackage = modulePackage;
    if (isMonorepo && !fs.existsSync(rootPath)) {
      const rootTemplateDir = `${templateDir}/root`;
      // copy template root
      templateFilesGenerator({
        prompts,
        actions,
        env: data,
        plop,
        recursive: true,
        templateDir: rootTemplateDir,
        path: rootPath
      })({ data, actions, templateDir: rootTemplateDir, path: rootPath });
    }
    const restActions = [
      {
        type: "add",
        path: `${srcPath}/rest/${model}Rest.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/rest.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}Rest.js";`,
        path: `${srcPath}/rest/index.ts`,
        data
      })
    ];
    const svelteContextActions = [
      {
        type: "add",
        path: `${srcPath}/svelte/context/${model}Context.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/svelte-context.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}Context.js";`,
        path: `${srcPath}/svelte/context/index.ts`,
        data
      })
    ];
    actions.push(...restActions, ...svelteContextActions);
    return actions;
  };
