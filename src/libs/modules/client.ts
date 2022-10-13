import { pascalCase } from "@deboxsoft/module-core";
import { templateFilesGenerator, getTemplateExportIndexAction } from "../../core/index.js";
import { Actions, PlopGeneratorFunction } from "../../types.js";
import fs from "fs";

export const moduleClientGenerator: PlopGeneratorFunction =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const isMonorepo = data.isMonorepo;
    const model = pascalCase(data.model),
      modulePackage = "client",
      rootPath = `${path}${isMonorepo ? `/${modulePackage}` : ""}`,
      srcPath = `${rootPath}/src`,
      svelteTemplateDir = `${templateDir}/svelte`;
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
    const restActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/rest/${model}Rest.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/rest.hbs`
      },
      getTemplateExportIndexAction(`./${model}Rest.js`, `${srcPath}/rest/index.ts`)
    ];
    const svelteContextActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/svelte/context/${model}Context.ts`,
        data,
        skipIfExists: true,
        templateFile: `${svelteTemplateDir}/context.hbs`
      },
      getTemplateExportIndexAction(`./${model}Context.js`, `${srcPath}/svelte/context/index.ts`)
    ];
    actions.push(...restActions, ...svelteContextActions);
    return actions;
  };
