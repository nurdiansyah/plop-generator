import { templateFilesGenerator } from "../../core/index.js";
import path from "path";
export const gatsbyGenerator = ({ path: startingPath, plop, prompts }) => {
    return ({ data = {}, actions = [], templateDir }) => {
        const workspace = data.workspace;
        const whitelistedWorkspaces = ["gatsby", "gatsby-contentful"];
        if (!whitelistedWorkspaces.includes(workspace))
            return [];
        // TODO: come back to. This works but I don't exactly like it since it's opinionated and dependent on each other
        templateFilesGenerator({
            plop,
            path: startingPath ? path.resolve(startingPath, "../shared-lib") : startingPath,
            templateDir: `${templateDir}/shared-lib`,
            actions,
            prompts
        })({ actions, data });
        templateFilesGenerator({
            plop,
            actions,
            path: `${startingPath}-components/`,
            templateDir: `${templateDir}/component-lib`,
            prompts
        })({ actions, data });
        return actions;
    };
};
