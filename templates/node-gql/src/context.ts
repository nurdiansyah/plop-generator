import { IncomingHttpHeaders } from 'http'

import { ForbiddenError } from 'apollo-server-express'
import { Request, Response } from 'express'
import { auth } from 'firebase-admin'

import { getDecodedToken } from './middleware/token.middleware'
import { isPublic } from './util/authorization-guard'

type IntegrationContext = {
  req: Request
  res: Response
  user: auth.UserRecord | null
}

export type PGEGraphQLContext = {
  // req: Request
  headers: IncomingHttpHeaders,
  user?: auth.DecodedIdToken
  log: any // TODO: add type
}

export const context = async (
  { req }: IntegrationContext
): Promise<PGEGraphQLContext> => {
  const user = await getDecodedToken(req.headers)

  // if (user === null) {
  //   if (!req.body.query.trim().startsWith('query Introspection')) {
  //     const isAccessible = isPublic(req.body.operationName)

  //     if(!isAccessible) {
  //       throw new ForbiddenError('Must Authenticate');
  //     }
  //   }
  // }
  return {
    // req
    headers: req.headers,
    user,
    log: req.log,
  }
}
