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
export const getPatternRegex = (key, end = false) =>
  new RegExp(`\\/\\* GEN-${end ? "END" : "ADD"}: ${key} \\*\\/`, "ig");

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
        unique: true,
        pattern: getPatternRegex(key),
        template
      });
    } else if (appendTemplates) {
      appendTemplates.forEach(({ key: _key, template, ..._ }) => {
        actions.push({
          type: "append",
          path,
          data,
          unique: true,
          template,
          pattern: getPatternRegex(_key),
          patternEnd: getPatternRegex(_key, true),
          ..._
        });
      });
    }
  } else if (templateFile) {
    actions.push({
      type: "add",
      path,
      templateFile: templateFile,
      data
    });
  } else if (template) {
    actions.push({
      type: "add",
      path,
      template: `${getPatternRegex(key)}\n${template}\n`,
      data
    });
  }
  return actions;
};

export const createAppendAction = ({ append = "", path, template, data, unique = true }) => {
  let pattern;
  if (fs.existsSync(path)) {
    return {
      type: "append",
      path,
      data,
      pattern: /(\/\* GEN-DROP \*\/)/gi,
      unique,
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

/**
 * @typedef {Object} TemplateActionOptions
 * @property {Record<string, any>} data
 * @property {string} templateFile
 * @property {string} model
 * @property {string} basePath
 * @property {string=""} suffix
 */
/**
 *
 * @param opts{TemplateActionOptions}
 * @return {import("@nurdiansyah/plop").ActionType[]}
 */
export const createTemplateAction = ({ basePath, templateFile, data, model, suffix }) => {
  /**
   *
   * @type {import("@nurdiansyah/plop").ActionType[]}
   */
  const actions = [];
  const path = `${basePath}/${model}${suffix}.ts`;
  const indexPath = `${basePath}/index.ts`;
  const indexTemplate = `export * from "./${model}${suffix}.js";`;
  if (!fs.existsSync(path)) {
    actions.push({
      type: "add",
      data,
      path,
      skipIfExists: true,
      templateFile
    });
    actions.push(
      createAppendAction({
        template: indexTemplate,
        path: indexPath,
        data
      })
    );
  } else if (!fs.existsSync(indexPath)) {
    actions.push(
      createAppendAction({
        template: indexTemplate,
        path: indexPath,
        data
      })
    );
  }
  return actions;
};
