import fs from "fs";
export const getAppendAction = (file, templateDir, action) => {
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
export const getPromptAction = (file, tmpDir, data, action) => {
    const isPrompt = file.includes(".prompt");
    const promptAction = { ...action };
    const dirExists = data[tmpDir];
    const isMultiplePrompt = isPrompt &&
        dirExists &&
        Array.isArray(dirExists) &&
        !data?.[tmpDir]?.find((f) => f === file);
    const notFound = isPrompt && !data?.[tmpDir];
    if (isMultiplePrompt || notFound) {
        promptAction.skip = () => `Skipped ${action.path}`;
    }
    return promptAction;
};
export const getPatternRegex = (key) => new RegExp(`(\\/\\* -- APPEND${key ? `-${key}` : ""} -- \\*\\/)`, "ig");
export const getTemplateExportIndexAction = (exportName, path) => {
    let type = "add";
    let template = `export * from "${exportName}";`;
    let pattern;
    if (fs.existsSync(path)) {
        type = "append";
        pattern = getPatternRegex();
        template = `${template}`;
    }
    else {
        template = `/* -- APPEND -- */\n${template}\n`;
    }
    return {
        type,
        path,
        pattern,
        template,
    };
};
