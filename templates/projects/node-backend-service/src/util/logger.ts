import fs from 'fs'
import { Stream } from 'stream'

import bunyan, { LogLevel } from 'bunyan'
import colors from 'colors'

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
  ? `/var/log/{{ name }}.log`
  : `${__dirname}/../../logs/{{ name }}.log`

const logDir = `${__dirname}/../../logs/`

// create directory if it doesn't exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

export const logger: any = bunyan.createLogger({
  name: '{{ name }} app',
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

export default logger
