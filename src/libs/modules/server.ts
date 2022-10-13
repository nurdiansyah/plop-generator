import { pascalCase } from "@deboxsoft/module-core";
import fs from "fs";
import { templateFilesGenerator, getPatternRegex } from "../../core/index.js";
import { Actions, PlopGeneratorFunction } from "../../types.js";

export const moduleServerGenerator: PlopGeneratorFunction =
  ({ plop, prompts }) =>
  ({ actions = [], templateDir, path, data = {} }) => {
    const model = pascalCase(data.model),
      modulePackage = "server",
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
    const getIndexGraphqlAction = (): Actions => {
      const path = `${srcPath}/graphql/index.ts`;
      if (fs.existsSync(path)) {
        return [
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex(),
            template:
              'import { create{{ pascalCase model }}Schema } from "./{{ pascalCase model }}schema";',
          },
          {
            type: "append",
            path,
            data,
            pattern: /typedefs: `/gi,
            template:
              // eslint-disable-next-line no-template-curly-in-string
              "${{#preCurly (pascalCase model) }}{{/preCurly}}Schema.typeDef}",
          },
          {
            type: "append",
            path,
            data,
            pattern: /resolvers: \[/gi,
            template: "{{ camelCase model }}Schema.resolvers",
          },
        ];
      }
      return [
        {
          type: "add",
          path,
          data,
          templateFile: `${templateDir}/index-graphql.hbs`,
          skipIfExists: true,
        },
      ];
    };

    const getIndexServiceAction = (): Actions => {
      const path = `${srcPath}/services/index.ts`;
      if (fs.existsSync(path)) {
        return [
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex(),
            template:
              'import { create{{ pascalCase model }}ServiceServer } from "./{{ pascalCase model }}ServiceServer";',
          },
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex("REGISTER"),
            template: "create{{ pascalCase model}}Server(options);",
          },
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex("EXPORT"),
            template:
              'export { get{{ pascalCase model }}ServiceServer, {{ pascalCase model }}ServiceServer, create{{ pascalCase model }}ServiceServer } from "./{{ pascalCase model }}ServiceServer";',
          },
        ];
      }
      return [
        {
          type: "add",
          path,
          data,
          templateFile: `${templateDir}/index-service.hbs`,
          skipIfExists: true,
        },
      ];
    };
    const getIndexRepoAction = (): Actions => {
      const path = `${srcPath}/db/index.ts`;
      if (fs.existsSync(path)) {
        return [
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex(),
            template: 'export * from "./{{ pascalCase model }}Repo";',
          },
        ];
      }
      return [
        {
          type: "add",
          path,
          data,
          templateFile: `${templateDir}/index-repo.hbs`,
          skipIfExists: true,
        },
      ];
    };
    const getIndexMongoAction = (): Actions => {
      const path = `${srcPath}/db/mongo/index.ts`;
      if (fs.existsSync(path)) {
        return [
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex(),
            template:
              'import { create{{ pascalCase model }}Repo } from "./{{ pascalCase model }}Collection";',
          },
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex("REGISTER"),
            template: "  create{{ pascalCase model }}Repo();",
          },
          {
            type: "append",
            path,
            data,
            pattern: getPatternRegex("COLLECTION"),
            template:
              'export { {{ pascalCase model }}Collection, create{{ pascalCase model }}Repo } from "./{{ pascalCase model }}Collection";',
          },
        ];
      }
      return [
        {
          type: "add",
          path,
          data,
          templateFile: `${templateDir}/index-mongo.hbs`,
          skipIfExists: true,
        },
      ];
    };
    const graphqlActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/graphql/${model}Schema.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/schema-graphql.hbs`,
      },
    ];
    const serviceActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/services/${model}Service.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/server-service.hbs`,
      },
    ];
    const repoActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/db/${model}Repo.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/repo.hbs`,
      },
    ];
    const mongoActions: Actions = [
      {
        type: "add",
        path: `${srcPath}/db/mongo/${model}Collection.ts`,
        data,
        skipIfExists: true,
        templateFile: `${templateDir}/mongo.hbs`,
      },
    ];
    actions.push(
      ...graphqlActions,
      ...getIndexGraphqlAction(),
      ...serviceActions,
      ...getIndexServiceAction(),
      ...repoActions,
      ...getIndexRepoAction(),
      ...mongoActions,
      ...getIndexMongoAction()
    );
    return actions;
  };
