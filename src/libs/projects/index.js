import path from "path";
import fs from "fs";

import { validatePackageName, templateFilesGenerator } from "../../core/index.js";
import { getConfigService } from "@deboxsoft/module-core";

const generatorId = "projects";

/**
 * @param plop {import("@nurdiansyah/plop").NodePlopAPI}
 */
export default (plop) => {
  const config = getConfigService();

  // load plugin
  plop.load(`${plop.getPlopfilePath()}/plugins/pnpm-install.js`, undefined, undefined);

  // helpers
  const templateDir = `${plop.getPlopfilePath()}/templates/${generatorId}`;
  let env = {
    generatorId,
    isMonorepo: config.get("is-monorepo")
  };
  /**
   *
   * @type {import("../../types.js").Prompts}
   */
  const prompts = [
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
  /**
   *
   * @type {import("../../types.js").Actions}
   */
  const actions = [];
  /**
   *
   * @type {import("../../types.js").GeneratorOptions}
   */
  const generatorOptions = {
    plop,
    env,
    prompts,
    actions,
    templateDir
  };
  const templateFilesAction = templateFilesGenerator(generatorOptions);
  plop.setGenerator(generatorId, {
    description: "Module Project Files",
    prompts,
    actions: (_data = {}) => {
      const data = Object.assign(env, _data);
      const cwd = process.cwd();
      let startingPath = cwd;
      if (data.isMonorepo || fs.existsSync(`${cwd}/pnpm-workspace.yaml`)) {
        startingPath = `${startingPath}/packages/${data.name}`;
      } else if (fs.existsSync(`${cwd}/pnpm-workspace.yaml`)) {
        startingPath = `packages/${data.name}`;
      } else {
        startingPath = `${startingPath}/${data.name}`;
      }
      data.basePath = startingPath;
      const workspaceTemplatePath = path.resolve(`${templateDir}/${data.workspace}/`);
      /**
       *
       * @type {import("../../types.js").ActionOptions}
       */
      const actionOptions = {
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

      /* INSTALL DEPENDENCIES */
      const directoriesToInstall = [`${cwd}/${data.name}`];
      directoriesToInstall.forEach((dir) => {
        actions.push({
          type: "pnpm-install",
          path: dir,
          verbose: true
        });
      });

      /* DEDUPE ACTIONS */
      const _tmp = {};
      return actions.reduce((acc, curr) => {
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
