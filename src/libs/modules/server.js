import { pascalCase } from "@deboxsoft/module-core";
import fs from "fs";
import { createAppendMultipleAction, createTemplateAction, templateFilesGenerator } from "../../core/index.js";
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

    const fastifyRouteActions = createTemplateAction({
      basePath: `${srcPath}/fastify`,
      model,
      suffix: "Route",
      data,
      templateFile: `${templateDir}/fastify-route.hbs`
    });

    actions.push(...serviceActions, ...repoActions, ...mongoCollectionActions, ...fastifyRouteActions);
    // index
    const indexActions = createAppendMultipleAction({
      type: "add",
      path: `${srcPath}/index.ts`,
      data,
      templateFile: `${templateDir}/index.hbs`,
      appendTemplates: [
        {
          key: "import-services",
          template: "\tcreate{{ pascalCase model }}ServiceServer,"
        },
        {
          key: "import-mongo",
          template: "\tcreate{{ pascalCase model }}Repo,"
        },
        {
          key: "import-fastify",
          template: "\tcreate{{ pascalCase model }}Route,"
        },
        {
          key: "create-service",
          template: "\tawait create{{ pascalCase model }}ServiceServer(config);"
        },
        {
          key: "create-mongo",
          template: "\tcreate{{ pascalCase model }}Repo();"
        },
        {
          key: "create-fastify",
          template: "\tcreate{{ pascalCase model }}Route(instance, opts);"
        }
      ]
    });
    actions.push(...indexActions);
    // console.log(actions);
    return actions;
  };
