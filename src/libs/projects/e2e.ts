import { getActions } from '../../core/actions';
import { Actions, PromptQuestion } from 'node-plop';
import { NodePlopAPI } from 'plop'

export const prompts: PromptQuestion[] = [
  {
    name: "includeE2E",
    when: (answers: { workspace: string }) => {
      const clientList = ['gatsby', 'gatsby-contentful', 'next', 'component-lib', 'create-react-app']
      return clientList.includes(answers.workspace);

    },
    message: "Do you want to include a cypress e2e suite?",
    type: 'confirm'
  }
]

export const e2eActionsHandler = (
  data: any,
  actions: any[],
  startingPath: string,
  plop: NodePlopAPI
): Actions => {
  if (data.includeE2E || data.workspace === 'cypress-e2e') {
    actions = getActions(`${startingPath}-e2e/`, `${plop.getPlopfilePath()}/templates/projects/cypress-e2e`)
    actions.push({
      type: 'pnpmInstall',
      path: `${startingPath}-e2e/`,
      verbose: true
    })
  }
  return actions
}
