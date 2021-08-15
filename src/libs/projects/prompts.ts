import fs from 'fs'

import { PromptQuestion } from 'node-plop'
import { NodePlopAPI } from 'plop'

import { prompts as e2ePrompts } from './e2e'
import { prompts as cicdPrompts } from './pipelines'

export default (plop: NodePlopAPI): PromptQuestion[] => {
  const prompts: PromptQuestion[]&any[] = [
    /* APPEND CUSTOM PROMPTS HERE */
    /**********👇👇👇*********** */
    ...e2ePrompts,
    ...cicdPrompts,
  ]

  /* GENERATE PROMPTS RECURSIVELY */
  const recursivePrompts = (templateDir: string): PromptQuestion[] => {
    const dir = fs.readdirSync(templateDir)
    dir.forEach((file, idx) => {
      const path = `${templateDir}/projects/${file}`
      if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        return recursivePrompts(path)
      } else if (idx === dir.length - 1) {
        const choices = fs.readdirSync(templateDir)
          .filter(filename => filename.includes('.prompt'))
          .map(filename => ({ description: `${templateDir}/projects/${filename}`, value: filename, checked: false }))

        if (choices.length) {
          prompts.push({
            type: choices.length > 1 ? 'checkbox' : 'confirm',
            name: templateDir,
            message: choices.length > 1 ?
              `What additional ${templateDir} files do you want` :
              `Do you want to include ${choices[0].description.replace('.prompt', '')}?`,
            choices,
            when: (answers: {[k:string]: any}) => answers.workspace === templateDir
              .replace(`${plop.getPlopfilePath()}/projects/templates/`, '')
              .split('/')[0]
          })
        }
      }
    })
    return prompts
  }
  return recursivePrompts(`${plop.getPlopfilePath()}/templates`)
}
