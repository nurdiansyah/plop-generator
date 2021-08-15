import { NextFunction, RequestHandler, Response } from 'express'
import { RateLimiterMemory } from 'rate-limiter-flexible'
import { ExtendedRequest } from 'src/interfaces/request'

import { logger as log } from './logger.middleware'

const maxRequestsByIPPerMinute = 3000

const limiterSlowBruteByIP = new RateLimiterMemory({
  points: maxRequestsByIPPerMinute, // Number of points
  duration: 60,
  blockDuration: 60 * 2,
})

export const rateLimiterMiddleware: RequestHandler = (req: ExtendedRequest|any, res: Response, next: NextFunction) => {
  const key = req?.user?.uid ? req?.user?.uid : req.ip
  log.info('rate limiter ids/keys', key, req.ip)
  const pointsToConsume = req?.user?.uid ? 1 : 30
  limiterSlowBruteByIP.consume(key, pointsToConsume)
    .then(() => { next() })
    .catch(() => { res.status(429).send('Too Many Requests') })
}

export const limitRequestsByIP: RequestHandler = async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  const ipAddress = `${req.ip}_${req.body.ssn}`
  const resSlowByIP = await limiterSlowBruteByIP.get(ipAddress)

  let retrySecs = 0
  if (resSlowByIP !== null && resSlowByIP.consumedPoints > maxRequestsByIPPerMinute) {
    retrySecs = Math.round(resSlowByIP.msBeforeNext / 1000) || 1
  }
  if (retrySecs > 0) {
    return res.status(429).send('Too Many Requests')
  }
  try {
    await limiterSlowBruteByIP.consume(ipAddress, 30)
  } catch (rlRejected) {
    res.set('Retry-After', String(Math.round(rlRejected.msBeforeNext / 1000)) || 1 as any)
    return res.status(429).send('Too Many Requests')
  }
  next()
}
