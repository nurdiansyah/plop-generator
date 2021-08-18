import fs from "fs";
import { ActionType, NodePlopAPI } from "node-plop";
import { getConfig } from "@deboxsoft/module-core";
import { validatePackageName } from "../../core/validations";
import { ActionOptions, Actions, GeneratorOptions, Prompts } from "../../types";
import { moduleApiGenerator } from "./api";
import { moduleServerGenerator } from "./server";
import { moduleClientGenerator } from "./client";

const generatorId = "modules";
export default (plop: NodePlopAPI) => {
  const config = getConfig();
  const templateDir = `${plop.getPlopfilePath()}/templates/${generatorId}`;
  const actions: Actions = [];
  const prompts: Prompts = [
    {
      type: "input",
      name: "moduleName",
      message: "module name",
      validate: validatePackageName,
    },
  ];
  const env: Record<string, any> = {
    isMonorepo: config.get("is-monorepo"),
    generatorId,
  };
  if (!env.isMonorepo) {
    prompts.push({
      type: "list",
      name: "modulePackage",
      choices: fs
        .readdirSync(templateDir)
        .map((dir) => ({ name: dir, value: dir })),
    });
  }
  prompts.push({
    type: "input",
    name: "model",
    message: "model name",
    validate: validatePackageName,
  });

  const generatorOptions: GeneratorOptions = {
    plop,
    env,
    prompts,
    actions,
    templateDir,
  };
  const moduleApiAction = moduleApiGenerator(generatorOptions);
  const moduleServerAction = moduleServerGenerator(generatorOptions);
  const moduleClientAction = moduleClientGenerator(generatorOptions);
  plop.setGenerator(generatorId, {
    description: "generator module deboxsoft framework",
    prompts,
    actions: (data = {}) => {
      data = { ...data, ...env };
      const isMonorepo = data.isMonorepo || false;
      const cwd = process.cwd();
      const startingPath = `${cwd}${isMonorepo ? "/packages" : ""}`;
      const actionOptions: ActionOptions = {
        actions,
        path: startingPath,
        templateDir,
        data,
      };
      /* GENERATE SELECTED WORKSPACE FILES */

      /* APPEND CUSTOM ACTION HANDLERS BELOW */
      /***************👇👇👇*************** */
      if (isMonorepo) {
        moduleApiAction(actionOptions);
        moduleClientAction(actionOptions);
        moduleServerAction(actionOptions);
      } else {
        if (data.modulePackage === "api") {
          moduleApiAction(actionOptions);
        } else if (data.modulePackage === "server") {
          moduleServerAction(actionOptions);
        } else if (data.modulePackage === "client") {
          moduleClientAction(actionOptions);
        }
      }

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
    },
  });
};
