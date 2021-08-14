"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.e2eActionsHandler = exports.prompts = void 0;
exports.prompts = [
    {
        name: "includeE2E",
        when: (answers) => {
            const clientList = ['gatsby', 'gatsby-contentful', 'next', 'component-lib', 'create-react-app'];
            if (clientList.includes(answers.workspace))
                return true;
            return false;
        },
        message: "Do you want to include a cypress e2e suite?",
        type: 'confirm'
    }
];
const e2eActionsHandler = (data, actions, recursiveFiles, startingPath, plop) => {
    if (data.includeE2E || data.workspace === 'cypress-e2e') {
        actions = recursiveFiles(`${startingPath}-e2e/`, `${plop.getPlopfilePath()}/templates/cypress-e2e`);
        actions.push({
            type: 'npmInstall',
            path: `${startingPath}-e2e/`,
            verbose: true
        });
    }
    return actions;
};
exports.e2eActionsHandler = e2eActionsHandler;
