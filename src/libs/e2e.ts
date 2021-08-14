import { Actions, PromptQuestion } from 'node-plop';
import { NodePlopAPI } from 'plop'

export const prompts: PromptQuestion[] = [
  {
    name: "includeE2E",
    when: (answers: { workspace: string }) => {
      const clientList = ['gatsby', 'gatsby-contentful', 'next', 'component-lib', 'create-react-app']
      if (clientList.includes(answers.workspace)) return true
      return false
    },
    message: "Do you want to include a cypress e2e suite?",
    type: 'confirm'
  }
]

export const e2eActionsHandler = (
  data: any,
  actions: any[],
  recursiveFiles: (s: string, s2: string) => any,
  startingPath: string,
  plop: NodePlopAPI
): Actions => {
  if (data.includeE2E || data.workspace === 'cypress-e2e') {
    actions = recursiveFiles(`${startingPath}-e2e/`, `${plop.getPlopfilePath()}/templates/cypress-e2e`)
    actions.push({
      type: 'npmInstall',
      path: `${startingPath}-e2e/`,
      verbose: true
    })
  }
  return actions
}
