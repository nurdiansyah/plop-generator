import { Request, Response } from 'express'

import { getVersion } from '../datasources/version-service'

export const get = (req: Request, res: Response) => {
  try {
    // make async call to service
    const versions = getVersion()
    res.status(200).send({ response: versions, status: 'success' })
  } catch (error) {
    req.log.error('Error Getting Versions:', error)
    res.status(400).send({ error: error?.message??error })
  }
}

export const post = (req: Request, res: Response) => {
  try {
    // make async call to service
    res.status(204).send()
  } catch (error) {
    req.log.error('Error Getting Versions:', error)
    res.status(400).send({ error: error?.message??error })
  }
}
