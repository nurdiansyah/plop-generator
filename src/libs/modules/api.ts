import { pascalCase } from "@deboxsoft/module-core";
import {
  getTemplateExportIndexAction,
  templateFilesGenerator,
} from "../../core/index.js";
import { Actions, PlopGeneratorFunction } from "../../types.js";

export const moduleApiGenerator: PlopGeneratorFunction =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const model = pascalCase(data.model),
      modulePackage = "api",
      rootPath = `${path}${data.isMonorepo ? `/${modulePackage}` : ""}`,
      srcPath = `${rootPath}/src`;
    templateDir = `${templateDir}/${modulePackage}`;
    const rootTemplateDir = `${templateDir}/root`;
    data.modulePackage = modulePackage;
    // copy template root
    templateFilesGenerator({
      prompts,
      actions,
      env: data,
      plop,
      recursive: true,
      templateDir: rootTemplateDir,
      path: rootPath,
    })({ data, actions, templateDir: rootTemplateDir, path: rootPath });
    // model
    const modelActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/models/${model}.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/model.hbs`,
      },
      getTemplateExportIndexAction(`./${model}`, `${srcPath}/models/index.ts`),
    ];
    const serviceActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/services/${model}Service.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/service.hbs`,
      },
      getTemplateExportIndexAction(
        `./${model}Service`,
        `${srcPath}/services/index.ts`
      ),
    ];
    const errorActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/errors/${model}Error.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/error.hbs`,
      },
      getTemplateExportIndexAction(
        `./${model}Error`,
        `${srcPath}/errors/index.ts`
      ),
    ];
    actions.push(...modelActions, ...serviceActions, ...errorActions);
    return actions;
  };
