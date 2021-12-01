import fs from "fs";
import { ActionType, NodePlopAPI } from "node-plop";
import { getConfig } from "@deboxsoft/module-core";
import { validatePackageName } from "../../core/validations";
import { ActionOptions, Actions, GeneratorOptions, Prompts } from "../../types";
import {templateFilesGenerator} from "../../core/template-files";

const generatorId = "sveltekit";
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
    generatorId,
  };
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
  plop.setGenerator(generatorId, {
    description: "generator sveltekit route",
    prompts,
    actions: (data = {}) => {
      data = { ...data, ...env };
      const startingPath = __dirname;
      const actionOptions: ActionOptions = {
        actions,
        path: startingPath,
        templateDir,
        data,
      };
      /* GENERATE SELECTED WORKSPACE FILES */

      /* APPEND CUSTOM ACTION HANDLERS BELOW */
      /***************👇👇👇*************** */
      templateFilesGenerator({
        prompts,
        actions,
        env: data,
        plop,
        recursive: true,
        templateDir,
        path: __dirname,
      })({ data, actions, templateDir, path: __dirname });

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
