import { templateFilesGenerator } from "../../core/index.js";
const promptsE2e = [
    {
        name: "includeE2E",
        when: (answers) => {
            const clientList = ["gatsby", "gatsby-contentful", "next", "component-lib", "create-react-app"];
            return clientList.includes(answers.workspace);
        },
        message: "Do you want to include a cypress e2e suite?",
        type: "confirm"
    }
];
export const e2eGenerator = ({ plop, prompts }) => {
    prompts.push(...promptsE2e);
    return ({ data = {}, actions = [], path }) => {
        if (data.includeE2E || data.workspace === "cypress-e2e") {
            const templateDir = `${plop.getPlopfilePath()}/templates/projects/cypress-e2e`;
            templateFilesGenerator({
                path,
                plop,
                prompts,
                actions,
                env: data,
                templateDir
            })({
                path: `${path}-e2e/`
            });
            const pnpmAction = {
                type: "pnpmInstall",
                path: `${path}-e2e/`,
                verbose: true
            };
            actions.push(pnpmAction);
        }
        return actions;
    };
};
