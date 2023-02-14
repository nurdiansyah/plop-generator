import { pascalCase } from "@deboxsoft/module-core";
import { createAppendMultipleAction, createTemplateAction, templateFilesGenerator } from "../../core/index.js";
import fs from "fs";

/**
 * @param opts {import("../../types.js").GeneratorOptions}
 * @return {import("../../types.js").PlopGeneratorFunction}
 */
export const moduleCoreGenerator =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const isMonorepo = data.isMonorepo;
    const model = pascalCase(data.model),
      modulePackage = "core",
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
    const modelActions = createTemplateAction({
      basePath: `${srcPath}/models`,
      model,
      suffix: "",
      data,
      templateFile: `${templateDir}/model.hbs`
    });

    /**
     * @type {import("../../").Actions}
     */
    const serviceActions = createTemplateAction({
      basePath: `${srcPath}/services`,
      model,
      suffix: "Service",
      data,
      templateFile: `${templateDir}/service.hbs`
    });

    /**
     * @type {import("../../").Actions}
     */
    const errorActions = createTemplateAction({
      basePath: `${srcPath}/errors`,
      model,
      suffix: "Error",
      data,
      templateFile: `${templateDir}/error.hbs`
    });
    // route
    const routeActions = createAppendMultipleAction({
      path: `${srcPath}/route.ts`,
      templateFile: `${templateDir}/route.hbs`,
      data,
      appendTemplates: [
        {
          key: "type",
          template: "  {{ camelCase model }}Route: string;"
        },
        {
          key: "route",
          template: "    {{ camelCase model }}Route: `${base}/{{ camelCase model }}`,"
        }
      ]
    });
    actions.push(...modelActions, ...serviceActions, ...errorActions, ...routeActions);
    return actions;
  };
