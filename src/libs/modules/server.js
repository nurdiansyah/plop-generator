import { pascalCase } from "@deboxsoft/module-core";
import fs from "fs";
import { createAppendAction, templateFilesGenerator } from "../../core/index.js";
export const moduleServerGenerator =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const isMonorepo = data.isMonorepo;
    const model = pascalCase(data.model),
      modulePackage = "server",
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
    const serviceActions = [
      {
        type: "add",
        path: `${srcPath}/services/${model}ServiceServer.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/service.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}ServiceServer.js";`,
        path: `${srcPath}/services/index.ts`,
        data
      })
    ];
    const repoActions = [
      {
        type: "add",
        path: `${srcPath}/db/${model}Repo.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/repo.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}Repo.js";`,
        path: `${srcPath}/db/index.ts`,
        data
      })
    ];
    const mongoCollectionActions = [
      {
        type: "add",
        path: `${srcPath}/db/mongo/${model}Collection.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/mongo-collection.hbs`
      },
      createAppendAction({
        template: `export * from "./${model}Collection.js";`,
        path: `${srcPath}/db/mongo/index.ts`,
        data
      })
    ];
    const fastifyRouteActions = [
      {
        type: "add",
        path: `${srcPath}/fastify/${model}Route.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/fastify-route.hbs`
      }
    ];
    actions.push(...serviceActions, ...repoActions, ...mongoCollectionActions, ...fastifyRouteActions);
    return actions;
  };
