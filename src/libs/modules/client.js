import { pascalCase } from "@deboxsoft/module-core";
import { templateFilesGenerator, createTemplateAction } from "../../core/index.js";
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
    const restActions = createTemplateAction({
      basePath: `${srcPath}/rest`,
      model,
      suffix: "Rest",
      data,
      templateFile: `${templateDir}/rest.hbs`
    });

    const svelteContextActions = createTemplateAction({
      basePath: `${srcPath}/svelte/context`,
      model,
      suffix: "Context",
      data,
      templateFile: `${templateDir}/svelte-context.hbs`
    });

    actions.push(...restActions, ...svelteContextActions);
    return actions;
  };
