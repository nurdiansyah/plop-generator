import path from "path";
import fs from "fs";
import {Actions, NodePlopAPI } from "node-plop";
import { validatePackageName } from "../../core/validations";
import { getPrompts } from "../../core/prompts";
import { getActions } from "../../core/actions";

export default (plop: NodePlopAPI) => {
  const templateDir = `${plop.getPlopfilePath()}/templates/modules`;
  plop.setGenerator("modules", {
    description: "generator module deboxsoft framework",
    prompts: [
      {
        type: "list",
        name: "module",
        choices: fs
          .readdirSync(templateDir)
          .map((dir) => ({ name: dir, value: dir })),
      },
      {
        type: "input",
        name: "model",
        message: "model name",
        validate: validatePackageName,
      },
    ],
    actions: (data) => {
      const isMonorepo = data.isMonorepo || false;
      const cwd = process.cwd();
      const startingPath = `${cwd}${isMonorepo ? "/packages" : ""}/${
        data.name
      }`;
      const startingTemplatePath = path.resolve(
        `${templateDir}/${data.module}/`
      );
      /* GENERATE SELECTED WORKSPACE FILES */
      let actions: Actions & any[] = getActions(
        startingPath,
        startingTemplatePath,
        data
      );

      /* APPEND CUSTOM ACTION HANDLERS BELOW */
      /***************👇👇👇*************** */

      /* DEDUPE ACTIONS */
      const uniqueActions: Record<string, any> = actions.reduce(
        (acc: any, curr: any) => {
          acc[curr.path] = curr;
          return acc;
        },
        {}
      );
      actions = Object.values(uniqueActions);
      return actions.filter((action) => !!action);
    },
  });
}
