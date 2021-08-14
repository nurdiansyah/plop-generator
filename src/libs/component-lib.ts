import { PromptQuestion } from 'node-plop'

export const prompts: PromptQuestion[] = [
  {
    name: "includeBootstrappedComponentLib",
    when: (answers: { workspace: string }) => {
      const artifacts = ['mongo', 'graphql', 'svelte', 'module-user', 'uvu']
      if (artifacts.includes(answers.workspace)) return true
      return false
    },
    message: "pilih artifact2 yang akan dipakai?",
    type: 'confirm'
  }
]
