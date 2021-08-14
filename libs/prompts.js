"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const e2e_1 = require("./e2e");
const pipelines_1 = require("./pipelines");
exports.default = (plop) => {
    const prompts = [
        ...e2e_1.prompts,
        ...pipelines_1.prompts,
    ];
    const recursivePrompts = (templateDir) => {
        const dir = fs_1.default.readdirSync(templateDir);
        dir.forEach((file, idx) => {
            const path = `${templateDir}/${file}`;
            if (fs_1.default.existsSync(path) && fs_1.default.lstatSync(path).isDirectory()) {
                return recursivePrompts(path);
            }
            else if (idx === dir.length - 1) {
                const choices = fs_1.default.readdirSync(templateDir)
                    .filter(filename => filename.includes('.prompt'))
                    .map(filename => ({ description: `${templateDir}/${filename}`, value: filename, checked: false }));
                if (choices.length) {
                    prompts.push({
                        type: choices.length > 1 ? 'checkbox' : 'confirm',
                        name: templateDir,
                        message: choices.length > 1 ?
                            `What additional ${templateDir} files do you want` :
                            `Do you want to include ${choices[0].description.replace('.prompt', '')}?`,
                        choices,
                        when: (answers) => answers.workspace === templateDir
                            .replace(`${plop.getPlopfilePath()}/templates/`, '')
                            .split('/')[0]
                    });
                }
            }
        });
        return prompts;
    };
    return recursivePrompts(`${plop.getPlopfilePath()}/templates`);
};
