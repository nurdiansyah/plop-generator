import { pascalCase } from "@deboxsoft/module-core";
import { getTemplateExportIndexAction } from "../../core/utils";
import { Actions, PlopGeneratorFunction } from "../../types";

export const moduleApiGenerator: PlopGeneratorFunction =
  ({ plop, prompts }) =>
  ({ actions, templateDir, path, data }) => {
    const model = pascalCase(data.model),
      modulePackage = "api",
      srcPath = `${path}/${modulePackage}/src`;
    templateDir = `${templateDir}/${modulePackage}`;
    data.modulePackage = modulePackage;
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
