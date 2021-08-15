import fs from "fs";

export const getAppendAction = (
  file: string,
  templateDir: string,
  action: Record<string, any>
) => {
  if (file.includes(".append")) {
    const appendAction = { ...action };
    appendAction.type = "modify";
    appendAction.pattern = /(-- APPEND ITEMS HERE --)/gi;
    appendAction.template = fs
      .readFileSync(`${templateDir}/${file}`)
      .toString();
    appendAction.path = appendAction.path.replace(".append", "");
    return appendAction;
  }
  return action;
};

export const getPromptAction = (
  file: string,
  tmpDir: string,
  data: any,
  action: Record<string, any>
) => {
  const isPrompt = file.includes(".prompt");
  const promptAction = { ...action };
  const dirExists = data[tmpDir];
  const isMultiplePrompt =
    isPrompt &&
    dirExists &&
    Array.isArray(dirExists) &&
    !data?.[tmpDir]?.find((f: string) => f === file);

  const notFound = isPrompt && !data?.[tmpDir];
  if (isMultiplePrompt || notFound) {
    promptAction.skip = () => `Skipped ${action.path}`;
  }
  return promptAction;
};
