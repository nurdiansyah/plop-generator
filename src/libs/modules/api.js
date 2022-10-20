import { pascalCase } from "@deboxsoft/module-core";
import { createAppendAction, createAppendMultipleAction, templateFilesGenerator } from "../../core/index.js";
import fs from "fs";

/**
 * @param opts {import("../../types.js").GeneratorOptions}
 * @return {import("../../types.js").PlopGeneratorFunction}
 */
export const moduleApiGenerator =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const isMonorepo = data.isMonorepo;
    const model = pascalCase(data.model),
      modulePackage = "api",
      rootPath = `${path}${data.isMonorepo ? `/${modulePackage}` : ""}`,
      srcPath = `${rootPath}/src`;
    templateDir = `${templateDir}/${modulePackage}`;
    data.modulePackage = modulePackage;
    if (!fs.existsSync(srcPath)) {
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
    // model
    /**
     * @type {import("../../").Actions}
     */
    const modelActions = [
      {
        type: "add",
        path: `${srcPath}/models/${model}.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/model.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}.js";`,
        path: `${srcPath}/models/index.ts`,
        data
      })
    ];
    /**
     * @type {import("../../").Actions}
     */
    const serviceActions = [
      {
        type: "add",
        path: `${srcPath}/services/${model}Service.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/service.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}Service.js";`,
        path: `${srcPath}/services/index.ts`,
        data
      })
    ];
    /**
     * @type {import("../../").Actions}
     */
    const errorActions = [
      {
        type: "add",
        path: `${srcPath}/errors/${model}Error.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/error.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}Error.js";`,
        path: `${srcPath}/errors/index.ts`,
        data
      })
    ];
    const routeActions = createAppendMultipleAction({
      path: `${srcPath}/route.ts`,
      templateFile: `${templateDir}/route.hbs`,
      data,
      appendTemplates: [
        {
          key: "type",
          template: "{{ camelCase model }}Route: string;"
        },
        {
          key: "route",
          template: "{{ camelCase model }}Route: `${base}/{{ camelCase model }}`,"
        }
      ]
    });
    actions.push(...modelActions, ...serviceActions, ...errorActions, ...routeActions);
    return actions;
  };
