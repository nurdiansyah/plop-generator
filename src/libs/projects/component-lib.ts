import { PromptQuestion } from 'node-plop'

export const prompts: PromptQuestion[] = [
  {
    name: "includeBootstrappedComponentLib",
    when: (answers: { workspace: string }) => {
      const artifacts = ['mongo', 'graphql', 'svelte', 'module-user', 'uvu']
      return artifacts.includes(answers.workspace);

    },
    message: "pilih artifact2 yang akan dipakai?",
    type: 'confirm'
  }
]
