import fs from "fs";
import { Actions } from "node-plop";
import { getAppendAction, getPromptAction } from "./utils";

export const getActions = (
  path: string,
  templateDir: string,
  data: Record<string, any> = {},
  actions: Actions & any[] = [],
  skipPattern = /.*(\.custom|\.github)$/
) => {
  const recursiveFiles = (_path: string, _templateDir: string) => {
    const tmpDir = _templateDir.replace(".", "");
    const files = fs.readdirSync(_templateDir);
    files.forEach((file) => {
      const isFile = file.includes(".") || file.endsWith("file");
      const skip = skipPattern.test(file);
      if (isFile && !skip) {
        let action: any = {
          type: "add",
          path: `${_path}/${file}`.replace(".prompt", ""),
          templateFile: `${_templateDir}/${file}`,
          skipIfExists: !file.includes(".modify") && !file.includes(".append"),
          abortOnFail: true,
          skip: () => false,
        };
        action = getAppendAction(file, _templateDir, action);
        action = getPromptAction(file, tmpDir, data, action);
        actions.push(action);
      } else if (
        fs.existsSync(`${_templateDir}/${file}`) &&
        fs.lstatSync(`${_templateDir}/${file}`).isDirectory()
      ) {
        return recursiveFiles(`${_path}/${file}`, `${_templateDir}/${file}`);
      }
    });
    return actions;
  };
  recursiveFiles(path, templateDir);
  return actions;
};
