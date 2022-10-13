import fs from "fs";
import {
  ActionOptions,
  GeneratorOptions,
  PlopGeneratorFunction,
  PromptOptions,
} from "../types.js";
import { getAppendAction, getPromptAction } from "./utils.js";

type RecursiveOptions = ActionOptions & GeneratorOptions;

export const templateFilesGenerator: PlopGeneratorFunction = ({
  plop,
  env = {},
  skipPattern = /.*(\.custom)$/,
  recursive = true,
  path,
  prompts,
  actions = [],
  templateDir,
}: GeneratorOptions) => {
  recursivePrompts({
    templateDir,
    pathDir: templateDir || "",
    prompts,
    data: env,
    path,
  });
  return (options) =>
    recursiveFilesAction({
      plop,
      path: options.path || path,
      templateDir: options.templateDir,
      data: options.data,
      prompts,
      skipPattern,
      recursive,
      actions: options.actions || actions,
    });
};

function recursivePrompts({
  templateDir,
  pathDir,
  data,
  prompts,
}: PromptOptions & { pathDir: string }) {
  const dir = fs.readdirSync(pathDir);
  dir.forEach((file, idx) => {
    const path = `${pathDir}/${file}`;
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
      return recursivePrompts({ templateDir, pathDir: path, data, prompts });
    } else if (idx === dir.length - 1) {
      const choices = fs
        .readdirSync(pathDir)
        .filter((filename) => filename.includes(".prompt"))
        .map((filename) => ({
          description: `${pathDir}/${filename}`,
          value: filename,
          checked: false,
        }));

      if (choices.length) {
        const prompt = {
          type: choices.length > 1 ? "checkbox" : "confirm",
          name: pathDir,
          message:
            choices.length > 1
              ? `What additional ${pathDir} files do you want`
              : `Do you want to include ${choices[0].description.replace(
                  ".prompt",
                  ""
                )}?`,
          choices,
          when: (answers: { [k: string]: any }) =>
            answers.workspace ===
            pathDir.replace(`${templateDir}/`, "").split("/")[0],
        };
        prompts?.push(prompt);
      }
    }
  });
  return prompts;
}

function recursiveFilesAction({
  plop,
  prompts,
  templateDir = "templates",
  skipPattern,
  path,
  data,
  actions,
  recursive,
}: RecursiveOptions) {
  const tmpDir = templateDir.replace(".", "");
  const files = fs.readdirSync(templateDir);
  files.forEach((file) => {
    const isFile = file.includes(".") || file.endsWith("file");
    const skip = skipPattern?.test(file);
    let action: any = {};
    if (isFile && !skip) {
      action = {
        type: "add",
        path: `${path}/${file}`.replace(".prompt", ""),
        templateFile: `${templateDir}/${file}`,
        skipIfExists: !file.includes(".modify") && !file.includes(".append"),
        abortOnFail: true,
        skip: () => false,
      };
      action = getAppendAction(file, templateDir, action);
      action = getPromptAction(file, tmpDir, data, action);
      if (Array.isArray(actions)) {
        actions.push(action);
      }
    } else if (
      recursive &&
      fs.existsSync(`${templateDir}/${file}`) &&
      fs.lstatSync(`${templateDir}/${file}`).isDirectory()
    ) {
      return recursiveFilesAction({
        plop,
        path: `${path}/${file}`,
        templateDir: `${templateDir}/${file}`,
        recursive,
        data,
        actions,
        skipPattern,
        prompts,
      });
    }
  });
  return actions;
}
