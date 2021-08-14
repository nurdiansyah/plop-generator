// import fs from 'fs'

import { NextFunction, RequestHandler, Response } from 'express'

import * as versionAPI from '../datasources/version-service'
import { ExtendedRequest } from '../interfaces/request'

export interface DAO {
  versionAPI: typeof versionAPI
}

export const dao: DAO = {
  versionAPI,
}

/* Scan the datasources directory and add all api services to the Data Access Object */
// const dao: any = {}
// fs.readdirSync(`${__dirname}/../datasources`).forEach(svc => {
//   dao[`${svc.split('.')[0].split('-')[0]}API`] = require(`../datasources/${svc}`)
// })

export const daoMiddleware: RequestHandler = (req: ExtendedRequest, _: Response, next: NextFunction): void => {
  req.dao = dao
  next()
}

export default daoMiddleware
