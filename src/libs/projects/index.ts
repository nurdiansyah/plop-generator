import path from "path";
import fs from "fs";

import { getActions } from "../../core/actions";
import { Actions } from "node-plop";
import { NodePlopAPI } from "plop";

import { validatePackageName } from "../../core/validations";
import { e2eActionsHandler } from "./e2e";
import { gatsbyActionHandler } from "./gatsby";
import { pipelinesActionHandler } from "./pipelines";
import { getPrompts } from "../../core/prompts";

type AnyObj = { [k: string]: any };

export default (plop: NodePlopAPI) => {
  plop.load(`${plop.getPlopfilePath()}/plugins/pnpm-install.js`, null, null);
  const templateDir = `${plop.getPlopfilePath()}/templates/projects`;
  plop.setGenerator("projects", {
    description: "Module Project Files",
    prompts: [
      {
        type: "list",
        name: "workspace",
        choices: fs
          .readdirSync(templateDir)
          .map((dir) => ({ name: dir, value: dir })),
      },
      {
        type: "input",
        name: "organization",
        message: "organization name",
        validate: validatePackageName,
      },
      {
        type: "input",
        name: "name",
        message: "workspace name",
        validate: validatePackageName,
      },
      ...getPrompts(plop, templateDir),
    ],
    actions: (data) => {
      const isWorkspace = data.isWorkspace || true;
      const cwd = process.cwd();
      const startingPath = `${cwd}${isWorkspace ? "/packages" : ""}/${
        data.name
      }`;
      const startingTemplatePath = path.resolve(
        `${templateDir}/${data.workspace}/`
      );
      /* GENERATE SELECTED WORKSPACE FILES */
      let actions: Actions & any[] = getActions(
        startingPath,
        startingTemplatePath,
        data
      );

      /* APPEND CUSTOM ACTION HANDLERS BELOW */
      /***************👇👇👇*************** */
      /* CYPRESS/E2E FILES */
      e2eActionsHandler(data, actions, startingPath, plop);
      /* CICD SUPPORT */
      pipelinesActionHandler(
        data.CICD,
        actions,
        startingPath,
        startingTemplatePath
      );
      /* GATSBY CUSTOM HANDLERS */
      gatsbyActionHandler(data.workspace, actions, startingPath, plop);

      /* INSTALL DEPENDENCIES */
      console.info("Install Dependencies");
      const directoriesToInstall = [`${cwd}/${data.name}`, cwd];
      directoriesToInstall.forEach((dir) => {
        actions.push({
          type: "pnpmInstall",
          path: dir,
          verbose: true,
        });
      });

      /* DEDUPE ACTIONS */
      const uniqueActions: AnyObj = actions.reduce(
        (acc: AnyObj, curr: AnyObj) => {
          acc[curr.path] = curr;
          return acc;
        },
        {}
      );
      actions = Object.values(uniqueActions);
      return actions.filter((action) => !!action);
    },
  });
};
