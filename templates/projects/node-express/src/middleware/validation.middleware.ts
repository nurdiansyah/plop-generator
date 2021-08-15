import Ajv from 'ajv'
// import type { RequestHandler } from 'express-serve-static-core'
import { NextFunction, Response } from 'express'

import { ExtendedRequest } from '../interfaces/request'

const removeNulls = (req: ExtendedRequest|any) => {
  Object.keys(req.body).forEach((key: string) => {
    if (req.body[key] === null) {
      delete req.body[key]
    } else if (typeof req.body[key] === 'object') {
      removeNulls({
        body: req.body[key]
      })
    }
  })
}

export function validateSchema (schema: any, req: ExtendedRequest, res: Response, next: NextFunction) {
  const ajv = new Ajv()
  removeNulls(req)
  ajv.validate(schema, req.body)
  req.log.info('schema validation check:', JSON.stringify(ajv.errors))
  if (ajv.errors?.length) {
    req.log.error(ajv.errors)
    req.log.info('invalid request sent: ',  JSON.stringify(req.body))
    return res.status(400).send(ajv.errors)
  }
  next()
}
