import fs from 'fs'
import { Stream } from 'stream'

import bunyan, { LogLevel } from 'bunyan'
import bunyanMiddleware from 'bunyan-middleware'
import colors from 'colors'

// import { Request } from 'express'

const myRawStream = (color: 'error' | 'info' | 'warn') => {
  const write: Stream | any = (rec: any) => {
    if (color === 'error') {
      console.error(colors.red(rec))
    }
    if (color === 'info') {
      console.info(colors.blue(rec))
    }
  }
  return {
    write
  }
}

const filePath =  process.env.NODE_ENV === 'production'
  ? `/var/log/{{dashCase name}}.log`
  : `${__dirname}/../../logs/{{dashCase name}}.log`

const logDir = `${__dirname}/../../logs/`

// create directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export const logger: any = bunyan.createLogger({
  name: '{{dashCase name}} app',
  level: (process.env.LOG_LEVEL as LogLevel) || 'info',
  streams: [
    {
      // stream: process.stdout,
      level: 'info',
      stream: myRawStream('info') as any
    },
    {
      // stream: process.stdout,
      level: 'error',
      stream: myRawStream('error') as any
    },
    {
      type: 'rotating-file',
      path: filePath,
      period: '1d', // daily rotation
      count: 3, // keep 3 back copies
    },
  ],
})

export default bunyanMiddleware({ headerName: 'X-Request-Id',
  propertyName: 'reqId',
  logName: 'request_id',
  obscureHeaders: [],
  logger,
  // additionalRequestFinishData: (req: Request) => {
  //   logger.info(`Request: ${req.reqId} completed successfully.`)
  //   return { success: true }
  // }
})
