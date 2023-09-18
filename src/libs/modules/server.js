import { pascalCase } from "@deboxsoft/module-core";
import fs from "fs";
import { createAppendMultipleAction, createTemplateAction, templateFilesGenerator } from "../../core/index.js";
import inquirer from "inquirer";
export const moduleServerGenerator = async ({ plop, prompts }) => {
  const promptModule = inquirer.createPromptModule();
  let isFastifyRoute = false;
  await promptModule({
    type: "confirm",
    name: "isFastifyRoute",
    message: "include fastify routes?"
  }).then((answer) => {
    isFastifyRoute = answer.isFastifyRoute;
  });
  return ({ actions = [], templateDir, path, data = {} }) => {
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
    const serviceActions = createTemplateAction({
      basePath: `${srcPath}/services`,
      model,
      suffix: "ServiceServer",
      data,
      templateFile: `${templateDir}/service.hbs`
    });

    const repoActions = createTemplateAction({
      basePath: `${srcPath}/db`,
      model,
      suffix: "Repo",
      data,
      templateFile: `${templateDir}/repo.hbs`
    });

    const mongoCollectionActions = createTemplateAction({
      basePath: `${srcPath}/db/mongo`,
      model,
      suffix: "Collection",
      data,
      templateFile: `${templateDir}/mongo-collection.hbs`
    });

    const fastifyRouteActions = isFastifyRoute
      ? createTemplateAction({
          basePath: `${srcPath}/fastify`,
          model,
          suffix: "Route",
          data,
          templateFile: `${templateDir}/fastify-route.hbs`
        })
      : [];

    actions.push(...serviceActions, ...repoActions, ...mongoCollectionActions, ...fastifyRouteActions);
    // index
    const appendTemplates = [
      {
        key: "import-services",
        template: "  create{{ pascalCase model }}ServiceServer,"
      },
      {
        key: "import-mongo",
        template: "  create{{ pascalCase model }}Repo,"
      },
      {
        key: "create-service",
        template: "  await create{{ pascalCase model }}ServiceServer(config);"
      },
      {
        key: "create-mongo",
        template: "  create{{ pascalCase model }}Repo();"
      }
    ];
    if (isFastifyRoute) {
      appendTemplates.push({
        key: "import-fastify",
        template: "  create{{ pascalCase model }}Route,"
      });
      appendTemplates.push({
        key: "create-fastify",
        template: "  create{{ pascalCase model }}Route(instance, opts);"
      });
    }
    const indexActions = createAppendMultipleAction({
      type: "add",
      path: `${srcPath}/index.ts`,
      data,
      templateFile: `${templateDir}/index.hbs`,
      appendTemplates
    });
    actions.push(...indexActions);
    return actions;
  };
};
