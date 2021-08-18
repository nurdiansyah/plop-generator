import { pascalCase } from "@deboxsoft/module-core";
import { getTemplateExportIndexAction } from "../../core/utils";
import { Actions, PlopGeneratorFunction } from "../../types";

export const moduleClientGenerator: PlopGeneratorFunction =
  ({ plop, prompts }) =>
  ({ actions, templateDir, path, data }) => {
    const model = pascalCase(data.model),
      modulePackage = "client",
      srcPath = `${path}/${modulePackage}/src`;
    templateDir = `${templateDir}/${modulePackage}`;
    data.modulePackage = modulePackage;
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
