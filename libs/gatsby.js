"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatsbyActionHandler = void 0;
const gatsbyActionHandler = (workspace, actions, recursiveFiles, startingPath, plop) => {
    const whitelistedWorkspaces = ['gatsby', 'gatsby-contentful'];
    if (!whitelistedWorkspaces.includes(workspace))
        return actions;
    actions = recursiveFiles(`${process.cwd()}/shared-lib/`, `${plop.getPlopfilePath()}/templates/shared-lib`);
    actions = recursiveFiles(`${startingPath}-components/`, `${plop.getPlopfilePath()}/templates/component-lib`);
    actions.push(...[
        {
            type: 'pnpmInstall',
            path: `${process.cwd()}/shared-lib/`,
            verbose: true
        },
        {
            type: 'pnpmInstall',
            path: `${startingPath}-components/`,
            verbose: true
        }
    ]);
    return actions;
};
exports.gatsbyActionHandler = gatsbyActionHandler;
