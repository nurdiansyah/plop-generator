import { Request } from 'express'
import { auth as firebase } from 'firebase-admin'

import { auth } from '../util/firebase'

// import { logger as log } from './logger.middleware'

export const getDecodedToken = async (
  { authorization }: Request['headers']
): Promise<firebase.DecodedIdToken | null> => {

  // return null if no token
  if (!authorization) {
    // log.info('No authorization header present') // throw error
    return null
  }

  // parse from bearer
  try {
    const [_, token] = authorization.split(' ')
    return await auth().verifyIdToken(token)
  } catch (err) {
    return null
  }
}
