import fs from "fs";
export const getAppendAction = (file, templateDir, action) => {
  action.type = "modify";
  action.pattern = /(\/\* GEN-DROP \*\/)/gi;
  action.template = fs.readFileSync(`${templateDir}/${file}`).toString();
  return action;
};
export const getPromptAction = (file, tmpDir, data, action) => {
  const isPrompt = file.includes(".prompt");
  const promptAction = { ...action };
  const dirExists = data[tmpDir];
  const isMultiplePrompt =
    isPrompt && dirExists && Array.isArray(dirExists) && !data?.[tmpDir]?.find((f) => f === file);
  const notFound = isPrompt && !data?.[tmpDir];
  if (isMultiplePrompt || notFound) {
    promptAction.skip = () => `Skipped ${action.path}`;
  }
  return promptAction;
};
export const getPatternRegex = (key) => new RegExp(`(\\/\\* GEN-ADD: ${key} \\*\\/)`, "ig");

/**
 * @param opts {Object}
 * @param path {string}
 * @param template {string?}
 * @param key {string?}
 * @param data {string}
 * @param templateFile {string?}
 * @param appendTemplates {import("../types").ModificationTemplatePattern[]}
 * @return {import("@nurdiansyah/node-plop").ActionType[]}
 */
export const createAppendMultipleAction = ({ template, path, key = "key", data, templateFile, appendTemplates }) => {
  /**
   *
   * @type {import("@nurdiansyah/node-plop").ActionType[]}
   */
  const actions = [];
  if (fs.existsSync(path)) {
    const type = "append";
    if (template) {
      actions.push({
        type,
        path,
        data,
        pattern: getPatternRegex(key),
        template
      });
    } else if (appendTemplates) {
      appendTemplates.forEach(({ key: _key, ..._ }) => {
        actions.push({
          type,
          path,
          data,
          pattern: getPatternRegex(_key),
          ..._
        });
      });
    }
  } else if (templateFile) {
    actions.push({
      type: "add",
      pattern: getPatternRegex(key),
      templateFile: templateFile,
      data
    });
  } else if (template) {
    actions.push({
      type: "add",
      template: `/* GEN-ADD: ${key} */\n${template}\n`,
      data
    });
  }
  return actions;
};

export const createAppendAction = ({ append = "", path, template, data }) => {
  let pattern;
  if (fs.existsSync(path)) {
    return {
      type: "append",
      path,
      data,
      pattern: /(\/\* GEN-DROP \*\/)/gi,
      template
    };
  }
  return {
    type: "add",
    path,
    data,
    skipIfExist: true,
    template: `/* GEN-DROP */\n${template}\n`
  };
};
