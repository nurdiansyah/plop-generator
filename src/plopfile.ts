import fs from 'fs'

import { NodePlopAPI } from 'plop'

// @ts-ignore
import { initMessage } from './bin/plop-init'
import actions from './libs/actions'
import prompts from './libs/prompts'
import { validatePackageName } from './libs/validations'

export default (plop: NodePlopAPI): void => {
  initMessage()
  plop.load('./plugins/pnpm-install.js', null, null)
  plop.setGenerator('project', {
    description: 'Module Project Files',
    /* CUSTOM PROMPTS */
    prompts: [
      {
        type: 'list',
        name: 'workspace',
        default: 'create-react-app',
        choices: fs.readdirSync(plop.getPlopfilePath() + '/templates')
          .map(dir => ({ name: dir, value: dir }))
      },
      {
        type: 'input',
        name: 'organization',
        message: 'organization name',
        validate: validatePackageName,
      },
      {
        type: 'input',
        name: 'name',
        message: 'workspace name',
        validate: validatePackageName,
      },
      /* RECURSIVE/DYNAMIC PROMPTS */
      ...prompts(plop),
    ],
    actions: actions.bind(null, plop)
  })
}
