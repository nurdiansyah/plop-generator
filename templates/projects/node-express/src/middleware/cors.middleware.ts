import { NextFunction, Response } from 'express'

import { ExtendedRequest } from '../interfaces/request';

const headers1 = 'Origin, X-Requested-With, Content-Type, Accept'
const headers2 = 'Authorization, Access-Control-Allow-Credentials, x-access-token'

const clientHeaderOrigin = process.env.CLIENT_URL || ''
const whitelist = [clientHeaderOrigin]

export const corsOptions = (req: ExtendedRequest, callback: (...args: any) => any): void => {
  const originIsWhitelisted = process.env.JEST_TEST || process.env.CI_TEST || whitelist.indexOf(req.headers.origin) !== -1
  callback(originIsWhitelisted ? null : `The CORS policy for this site does not allow access from the specified Origin: ${req.headers.origin}`, originIsWhitelisted)
}

export default (_: ExtendedRequest, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', process.env.CI_TEST ? '*' : whitelist[0])
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, DELETE, PATCH, OPTIONS, PUT'
  )
  res.header('Access-Control-Allow-Headers', `${headers1},${headers2}`)
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}
