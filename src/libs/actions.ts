import fs  from 'fs'
import path from 'path'

import { Actions } from 'node-plop';
import { NodePlopAPI } from 'plop'

import { e2eActionsHandler } from './e2e'
// import { gatsbyActionHandler } from './gatsby'
import { pipelinesActionHandler } from './pipelines';

type AnyObj = { [k: string]: any }

const getAppendAction = (file: string, templateDir: string, action: AnyObj) => {
  if (file.includes('append')) {
    const appendAction = { ...action }
    appendAction.type = 'modify'
    appendAction.pattern = /(-- APPEND ITEMS HERE --)/gi
    appendAction.template = fs.readFileSync(`${templateDir}/${file}`).toString()
    appendAction.path = appendAction.path.replace('.append', '')
    return appendAction
  }
  return action
}

const getPromptAction = (file: string, tmpDir: string, data: any, action: AnyObj) => {
  const isPrompt = file.includes('.prompt')
  const promptAction = { ...action }
  const dirExists = data[tmpDir]
  const isMultiplePrompt = isPrompt
    && dirExists
    && Array.isArray(dirExists)
    && !data?.[tmpDir]?.find((f: string) => f === file)

  const notFound = isPrompt && !data?.[tmpDir]
  if (isMultiplePrompt || notFound) {
    promptAction.skip = () => `Skipped ${action.path}`
  }
  return promptAction
}

export default (plop: NodePlopAPI, data: AnyObj): Actions => {
  let actions: Actions&any[] = []
  const cwd = process.cwd()
  const startingPath = `${cwd}/${data.name}`
  const startingTemplatePath = path.resolve(`${plop.getPlopfilePath()}/templates/${data.workspace}/`)

  /* RECURSIVE FILE MERGER BY WORKSPACE */
  const recursiveFiles = (path: string, templateDir: string) => {
    const tmpDir = templateDir.replace('.', '')
    const files = fs.readdirSync(templateDir)
    files.forEach(file => {
      const isFile = file.includes('.') || file.endsWith('file')
      const doSkip = !file.includes('.storybook') && !file.includes('.custom') && !file.includes('.github')
      if (isFile && doSkip) {
        let action: any = {
          type: 'add',
          path: `${path}/${file}`.replace('.prompt', ''),
          templateFile: `${templateDir}/${file}`,
          skipIfExists: !file.includes('.modify') && !file.includes('.append'),
          abortOnFail: true,
          skip: () => false,
        }
        action = getAppendAction(file, templateDir, action)
        action = getPromptAction(file, tmpDir, data, action)
        actions.push(action)
      } else if (fs.existsSync(`${templateDir}/${file}`) 
        && fs.lstatSync(`${templateDir}/${file}`).isDirectory()) {
        return recursiveFiles(`${path}/${file}`, `${templateDir}/${file}`)
      }
    })
    return actions
  }

  /* GENERATE SELECTED WORKSPACE FILES */
  actions = recursiveFiles(startingPath, startingTemplatePath)

  /* APPEND CUSTOM ACTION HANDLERS BELOW */
  /***************👇👇👇*************** */
  /* CYPRESS/E2E FILES */
  e2eActionsHandler(data, actions, recursiveFiles, startingPath, plop)
  /* CICD SUPPORT */
  pipelinesActionHandler(data.CICD, actions, startingPath, startingTemplatePath)
  /* GATSBY CUSTOM HANDLERS */
  // gatsbyActionHandler(data.workspace, actions, recursiveFiles, startingPath, plop)

  /* INSTALL DEPENDENCIES */
  console.info('Install Dependencies')
  const directoriesToInstall = [`${cwd}/${data.name}`, cwd]
  directoriesToInstall.forEach(dir => {
    actions.push({
      type: 'pnpmInstall',
      path: dir,
      verbose: true
    })
  })

  /* DEDUPE ACTIONS */
  const uniqueActions: AnyObj = actions.reduce((acc: AnyObj, curr: AnyObj) => {
    acc[curr.path] = curr
    return acc
  }, {})
  actions = Object.values(uniqueActions)
  return actions.filter(action => !!action)
}
