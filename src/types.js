/**
 * @typedef {import("@nurdiansyah/node-plop").Prompts} Prompts
 */

/**
 * @typedef {import("@nurdiansyah/node-plop").ActionType} ActionType
 * @property {string=} type
 */

/**
 * @typedef {ActionType[]} Actions
 */

/**
 * @typedef {Object} GeneratorOptions
 * @property {import("@nurdiansyah/node-plop").NodePlopAPI} plop
 * @property {Prompts} prompts
 * @property {Actions} actions
 * @property {RegExp=} skipPattern
 * @property {Record<string, any>=} env
 * @property {boolean=} recursive
 * @property {string=} path
 * @property {string=} templateDir
 */

/**
 * @typedef {Object} ActionOptions
 * @property {Record<string, any>=} data
 * @property {Actions[]=} actions
 */

/**
 * @typedef {Object} PromptOptions
 * @property {Record<string, any>=} data
 * @property {Prompts[]} prompts
 * @property {string=} templateDir
 * @property {string=} path
 */

/**
 * @callback ActionsCB
 * @param {ActionOptions=} options
 */

/**
 * @callback PromptsCB
 * @param {PromptOptions=} options
 */

/**
 * @typedef {Object} GeneratorReturn
 * @property {ActionsCB} actions
 * @property {PromptsCB} prompts
 */

/**
 * @callback PlopGeneratorFunction
 * @param {GeneratorOptions} options
 * @return {Actions | Promise<Actions>}
 */

/**
 * @typedef {Object} ModificationTemplatePattern
 * @property {string} key
 * @property {string=} template
 * @property {string=} templateFile
 */
