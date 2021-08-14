"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipelinesActionHandler = exports.prompts = void 0;
exports.prompts = [
    {
        name: "CICD",
        when: (answers) => {
            const blacklist = ['shared-lib', 'cypress-e2e'];
            if (blacklist.includes(answers.workspace))
                return false;
            return true;
        },
        choices: [
            { name: 'Google Cloud Build', value: 'cloudbuild' },
            { name: 'GitHub Actions', value: 'github' },
            { name: 'GitLab CI', value: 'gitlab' },
            { name: 'Azure DevOps', value: 'azure' },
            { name: 'None', value: false }
        ],
        message: "Do you want to include a CICD pipeline?",
        type: 'list'
    }
];
var Template;
(function (Template) {
    Template[Template["cloudbuild"] = 0] = "cloudbuild";
    Template[Template["github"] = 1] = "github";
    Template[Template["gitlab"] = 2] = "gitlab";
    Template[Template["azure"] = 3] = "azure";
})(Template || (Template = {}));
const getCustomBasePath = (type, defaultPath) => {
    const customBasePath = {
        cloudbuild: defaultPath,
        github: `${process.env.cwd}/.github/workflows/`,
        gitlab: process.cwd(),
        azure: defaultPath,
    };
    return customBasePath[type];
};
const pipelinesActionHandler = (type, actions, destination, templatePath) => {
    if (!type)
        return actions;
    const templateFiles = {
        cloudbuild: [`${templatePath}/pipelines/cloud*`],
        github: [`${templatePath}/.github/**`],
        gitlab: [],
        azure: [],
    };
    actions.push({
        type: "addMany",
        destination: getCustomBasePath(type, destination),
        base: templatePath,
        templateFiles: templateFiles[type],
        stripExtensions: '.custom'
    });
    return actions;
};
exports.pipelinesActionHandler = pipelinesActionHandler;
