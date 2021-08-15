require('dotenv').config({
  path: `${__dirname}/../.env`,
})

import initService from "./services"
import log from './util/logger'

export default (async (): Promise<void|Error> => {
  try {
    await initService()
    log.info('Success!')
    return Promise.resolve()
  } catch (error) {
    log.error('Service Failed', error)
    throw error
  }
})()
