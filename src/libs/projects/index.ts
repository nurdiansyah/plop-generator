import path from "path";
import fs from "fs";

import { ActionType, NodePlopAPI } from "plop";

import { validatePackageName, templateFilesGenerator } from "../../core/index.js";
import { e2eGenerator } from "./e2e.js";
import { gatsbyGenerator } from "./gatsby.js";
import { pipelinesGenerator } from "./pipelines.js";
import { Prompts, Actions, GeneratorOptions, ActionOptions } from "../../types.js";
import { getConfigService } from "@deboxsoft/module-core/libs/config";
import { hbsVariableHelpers } from "../../helpers/index.js";

const generatorId = "projects";

export default (plop: NodePlopAPI) => {
  const config = getConfigService();

  // load plugin
  plop.load(`${plop.getPlopfilePath()}/plugins/pnpm-install.js`, undefined, undefined);

  // helpers
  hbsVariableHelpers(plop);
  const templateDir = `${plop.getPlopfilePath()}/templates/${generatorId}`;
  let env: any = {
    generatorId,
    isMonorepo: config.get("is-monorepo")
  };
  const prompts: Prompts = [
    {
      type: "list",
      name: "workspace",
      choices: fs.readdirSync(templateDir).map((dir) => ({ name: dir, value: dir }))
    },
    {
      type: "input",
      name: "organization",
      message: "organization name",
      validate: validatePackageName,
      default: "deboxsoft"
    },
    {
      type: "input",
      name: "name",
      message: "workspace name",
      validate: validatePackageName
    }
  ];
  const actions: Actions = [];
  const generatorOptions: GeneratorOptions = {
    plop,
    env,
    prompts,
    actions,
    templateDir
  };
  const templateFilesAction = templateFilesGenerator(generatorOptions);
  const e2eAction = e2eGenerator(generatorOptions);
  const gatsbyAction = gatsbyGenerator(generatorOptions);
  const pipelineAction = pipelinesGenerator(generatorOptions);
  plop.setGenerator(generatorId, {
    description: "Module Project Files",
    prompts,
    actions: (_data = {}) => {
      const data = Object.assign(env, _data);
      const cwd = process.cwd();
      let startingPath = cwd;
      if (data.isMonorepo || fs.existsSync(`${cwd}/pnpm-workspace.yaml`)) {
        startingPath = `${startingPath}/packages/${data.name}`;
      } else {
        startingPath = `${startingPath}/${data.name}`;
      }
      data.basePath = startingPath;
      const workspaceTemplatePath = path.resolve(`${templateDir}/${data.workspace}/`);
      const actionOptions: ActionOptions = {
        path: startingPath,
        templateDir,
        actions,
        data
      };
      /* GENERATE SELECTED WORKSPACE FILES */
      templateFilesAction({
        ...actionOptions,
        templateDir: workspaceTemplatePath
      });

      /* APPEND CUSTOM ACTION HANDLERS BELOW */
      /***************👇👇👇*************** */
      /* CYPRESS/E2E FILES */
      // e2eAction(actionOptions);
      /* CICD SUPPORT */
      pipelineAction(actionOptions);
      /* GATSBY CUSTOM HANDLERS */
      // gatsbyAction(actionOptions);

      /* INSTALL DEPENDENCIES */
      console.info("Install Dependencies");
      if (data.isMonorepo) {
      }
      const directoriesToInstall = [`${cwd}/${data.name}`, cwd];
      directoriesToInstall.forEach((dir) => {
        actions.push({
          type: "pnpm-install",
          path: dir,
          verbose: true
        });
      });

      /* DEDUPE ACTIONS */
      const _tmp: Record<string, ActionType> = {};
      return actions.reduce((acc: Actions, curr) => {
        // @ts-ignore
        const path = curr?.path;
        if (path) {
          if (_tmp[path]) {
            return acc;
          }
          if (!!curr) {
            _tmp[path] = curr;
            acc.push(curr);
          }
        } else {
          // add action not file type
          acc.push(curr);
        }
        return acc;
      }, []);
    }
  });
};
