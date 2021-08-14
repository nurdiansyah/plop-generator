import { Actions } from 'node-plop';
import { NodePlopAPI } from 'plop'

export const gatsbyActionHandler = (
  workspace: string,
  actions: any[],
  recursiveFiles: (s: string, s2: string) => any[],
  startingPath: string,
  plop: NodePlopAPI
): Actions => {
  const whitelistedWorkspaces = ['gatsby', 'gatsby-contentful']
  if (!whitelistedWorkspaces.includes(workspace)) return actions
  // TODO: come back to. This works but I don't exactly like it since it's opinionated and dependent on each other
  actions = recursiveFiles(`${process.cwd()}/shared-lib/`, `${plop.getPlopfilePath()}/templates/shared-lib`)
  actions = recursiveFiles(`${startingPath}-components/`, `${plop.getPlopfilePath()}/templates/component-lib`)
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
  ])
  return actions
}
