import { pascalCase } from "@deboxsoft/module-core";
import {
  templateFilesGenerator,
  getTemplateExportIndexAction,
} from "../../core/index.js";
import { Actions, PlopGeneratorFunction } from "../../types.js";

export const moduleClientGenerator: PlopGeneratorFunction =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const model = pascalCase(data.model),
      modulePackage = "client",
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
    const graphqlActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/graphql/${model}Document.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/graphql-document.hbs`,
      },
      getTemplateExportIndexAction(
        `./${model}Document`,
        `${srcPath}/graphql/index.ts`
      ),
    ];
    const serviceActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/services/${model}Service.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/client-service.hbs`,
      },
      getTemplateExportIndexAction(
        `./${model}Service`,
        `${srcPath}/services/index.ts`
      ),
    ];
    const svelteStoresActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/stores/${model}Store.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/svelte-store.hbs`,
      },
      getTemplateExportIndexAction(
        `./${model}Store`,
        `${srcPath}/stores/index.ts`
      ),
    ];
    actions.push(...graphqlActions, ...serviceActions, ...svelteStoresActions);
    return actions;
  };
