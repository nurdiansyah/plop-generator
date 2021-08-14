"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const e2e_1 = require("./e2e");
const pipelines_1 = require("./pipelines");
const getAppendAction = (file, templateDir, action) => {
    if (file.includes('append')) {
        const appendAction = { ...action };
        appendAction.type = 'modify';
        appendAction.pattern = /(-- APPEND ITEMS HERE --)/gi;
        appendAction.template = fs_1.default.readFileSync(`${templateDir}/${file}`).toString();
        appendAction.path = appendAction.path.replace('.append', '');
        return appendAction;
    }
    return action;
};
const getPromptAction = (file, tmpDir, data, action) => {
    var _a;
    const isPrompt = file.includes('.prompt');
    const promptAction = { ...action };
    const dirExists = data[tmpDir];
    const isMultiplePrompt = isPrompt
        && dirExists
        && Array.isArray(dirExists)
        && !((_a = data === null || data === void 0 ? void 0 : data[tmpDir]) === null || _a === void 0 ? void 0 : _a.find((f) => f === file));
    const notFound = isPrompt && !(data === null || data === void 0 ? void 0 : data[tmpDir]);
    if (isMultiplePrompt || notFound) {
        promptAction.skip = () => `Skipped ${action.path}`;
    }
    return promptAction;
};
exports.default = (plop, data) => {
    let actions = [];
    const cwd = process.cwd();
    const startingPath = `${cwd}/${data.name}`;
    const startingTemplatePath = path_1.default.resolve(`${plop.getPlopfilePath()}/templates/${data.workspace}/`);
    const recursiveFiles = (path, templateDir) => {
        const tmpDir = templateDir.replace('.', '');
        const files = fs_1.default.readdirSync(templateDir);
        files.forEach(file => {
            const isFile = file.includes('.') || file.endsWith('file');
            const doSkip = !file.includes('.storybook') && !file.includes('.custom') && !file.includes('.github');
            if (isFile && doSkip) {
                let action = {
                    type: 'add',
                    path: `${path}/${file}`.replace('.prompt', ''),
                    templateFile: `${templateDir}/${file}`,
                    skipIfExists: !file.includes('.modify') && !file.includes('.append'),
                    abortOnFail: true,
                    skip: () => false,
                };
                action = getAppendAction(file, templateDir, action);
                action = getPromptAction(file, tmpDir, data, action);
                actions.push(action);
            }
            else if (fs_1.default.existsSync(`${templateDir}/${file}`)
                && fs_1.default.lstatSync(`${templateDir}/${file}`).isDirectory()) {
                return recursiveFiles(`${path}/${file}`, `${templateDir}/${file}`);
            }
        });
        return actions;
    };
    actions = recursiveFiles(startingPath, startingTemplatePath);
    e2e_1.e2eActionsHandler(data, actions, recursiveFiles, startingPath, plop);
    pipelines_1.pipelinesActionHandler(data.CICD, actions, startingPath, startingTemplatePath);
    console.info('Install Dependencies');
    const directoriesToInstall = [`${cwd}/${data.name}`, cwd];
    directoriesToInstall.forEach(dir => {
        actions.push({
            type: 'pnpmInstall',
            path: dir,
            verbose: true
        });
    });
    const uniqueActions = actions.reduce((acc, curr) => {
        acc[curr.path] = curr;
        return acc;
    }, {});
    actions = Object.values(uniqueActions);
    return actions.filter(action => !!action);
};
