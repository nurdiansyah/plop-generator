import { Actions, PromptQuestion } from 'node-plop'

export const prompts: PromptQuestion[] = [
  {
    name: "CICD",
    when: (answers: { workspace: string }) => {
      const blacklist = ['shared-lib', 'cypress-e2e']
      if (blacklist.includes(answers.workspace)) return false
      return true
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
]

enum Template {
  'cloudbuild',
  'github',
  'gitlab',
  'azure'
}

const getCustomBasePath = (type: Template, defaultPath: string) => {
  const customBasePath = {
    cloudbuild: defaultPath,
    github: `${process.env.cwd}/.github/workflows/`,
    gitlab: process.cwd(),
    azure: defaultPath,
  }
  return customBasePath[type]
}

export const pipelinesActionHandler = (
  type: Template,
  actions: any[],
  destination: string,
  templatePath: string
): Actions => {
  if (!type) return actions

  const templateFiles = {
    cloudbuild: [`${templatePath}/pipelines/cloud*`],
    github: [`${templatePath}/.github/**`],
    gitlab: [],
    azure: [],
  }

  actions.push({
    type: "addMany",
    destination: getCustomBasePath(type, destination),
    base: templatePath,
    templateFiles: templateFiles[type],
    stripExtensions: '.custom'
  })
  return actions
}
