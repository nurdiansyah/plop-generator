import fs from "fs";
import { getConfigService } from "@deboxsoft/module-core";
import { validatePackageName } from "../../core/index.js";
import { moduleCoreGenerator } from "./core.js";
import { moduleServerGenerator } from "./server.js";
import { moduleClientGenerator } from "./client.js";
import inquirer from "inquirer";
const generatorId = "modules";

/**
 *
 * @param plop {import("@nurdiansyah/plop").NodePlopAPI}
 * @return {Promise<void>}
 */
export default async (plop) => {
  const config = getConfigService();
  const templateDir = `${plop.getPlopfilePath()}/templates/${generatorId}`;
  const actions = [];
  const prompts = [
    {
      type: "input",
      name: "organization",
      message: "organization name",
      validate: validatePackageName,
      default: "deboxsoft"
    },
    {
      type: "input",
      name: "projectName",
      message: "project name",
      validate: validatePackageName,
      default: config.get("project-name")
    }
  ];
  const env = {
    isMonorepo: config.get("is-monorepo") || fs.existsSync(`${process.cwd()}/pnpm-workspace.yaml`),
    generatorId
  };
  const promptModule = inquirer.createPromptModule();
  if (!env.isMonorepo) {
    await promptModule({
      type: "list",
      name: "package",
      message: "module",
      choices: fs.readdirSync(templateDir).map((dir) => ({ name: dir, value: dir }))
    }).then((answer) => {
      env.package = answer.package;
    });
  } else {
    await promptModule({
      type: "checkbox",
      name: "packages",
      choices: ["core", "server", "client"]
    }).then((answer) => {
      env.packages = answer.packages;
    });
  }
  prompts.push({
    type: "input",
    name: "model",
    message: "model name",
    validate: validatePackageName
  });
  if (env.isMonorepo) {
  }
  const generatorOptions = {
    plop,
    env,
    prompts,
    actions,
    templateDir
  };
  let moduleCoreAction, moduleServerAction, moduleClientAction;
  if (env.packages?.includes("core") || env.package === "core")
    moduleCoreAction = moduleCoreGenerator(generatorOptions);
  if (env.packages?.includes("server") || env.package === "server")
    moduleServerAction = await moduleServerGenerator(generatorOptions);
  if (env.packages?.includes("client") || env.package === "client")
    moduleClientAction = moduleClientGenerator(generatorOptions);
  plop.setGenerator(generatorId, {
    description: "generator module deboxsoft framework",
    prompts,
    actions: (data = {}) => {
      data = { ...data, ...env };
      const isMonorepo = data.isMonorepo || false;
      const cwd = process.cwd();
      const startingPath = `${cwd}${isMonorepo ? "/packages" : ""}`;
      const actionOptions = {
        actions,
        path: startingPath,
        templateDir,
        data
      };
      /* GENERATE SELECTED WORKSPACE FILES */
      /* APPEND CUSTOM ACTION HANDLERS BELOW */
      /***************👇👇👇*************** */
      if (isMonorepo) {
        if (data.packages.includes("core")) moduleCoreAction(actionOptions);
        if (data.packages.includes("client")) moduleClientAction(actionOptions);
        if (data.packages.includes("server")) moduleServerAction(actionOptions);
      } else {
        if (data.package === "core") moduleCoreAction(actionOptions);
        else if (data.package === "server") moduleServerAction(actionOptions);
        else if (data.package === "client") moduleClientAction(actionOptions);
      }
      // /* DEDUPE ACTIONS */
      // const _tmp = {};
      // return actions.reduce((acc, curr) => {
      //   // @ts-ignore
      //   const path = curr?.path;
      //   if (path ) {
      //     if (_tmp[path]) {
      //       return acc;
      //     }
      //     if (!!curr) {
      //       _tmp[path] = curr;
      //       acc.push(curr);
      //     }
      //   } else {
      //     // add action not file type
      //     acc.push(curr);
      //   }
      //   return acc;
      // }, []);
      return actions;
    }
  });
};
