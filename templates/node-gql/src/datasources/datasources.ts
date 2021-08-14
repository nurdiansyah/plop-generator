// import fs from 'fs'

import * as versionAPI from './version'

export interface DAO {
  versionAPI: typeof versionAPI
}

// const dao: any = {}
// fs.readdirSync(`${__dirname}`).forEach(svc => {
//   if (!['index.ts', 'datasources.ts'].includes(svc)) {
//     dao[`${svc.split('.')[0].split('-')[0]}API`] = require(`./${svc}`)
//   }
// })

const dao: DAO = {
  versionAPI,
}

export default dao
