require('dotenv').config({
  path: `${__dirname}/../.env}`,
})

import bodyParser from 'body-parser'
import cors from 'cors'
import express, { Request, Response } from 'express'
import helmet from 'helmet'
import xssFilter from 'x-xss-protection'

import { HealthCheck } from './interfaces/health-check.interface'
import corsMiddleware, { corsOptions } from './middleware/cors.middleware'
import daoMiddleware from './middleware/dao.middleware'
import loggerMiddleware from './middleware/logger.middleware'
import routes from './routes'

type Logger = (...msg: any[]) => void

declare global {
  namespace Express {
    export interface Request {
       logger?: Logger
       token?: string
       user: { [k: string]: any }
    }
  }
}

const app = express()
const router = express.Router()

// For security reasons - don't tell users details about this web app in the headers
app.disable('x-powered-by')

// setup body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Add Logging Middleware
app.use(loggerMiddleware)

// enable cors
app.use(cors(corsOptions))

// Add cors headers
app.use(corsMiddleware)

// Add DAO
app.use(daoMiddleware)

// Sets "X-XSS-Protection: 1; mode=block".
app.use(xssFilter({ reportUri: '/report-xss-violation' }))
app.use(helmet())

app.get('/', (_: Request, res: Response): void => {
  const response: HealthCheck = {
    status: 200,
    message: 'healthy'
  }
  res.status(200).json(response)
})

// Add API Routes
app.use('/api', router)
routes(router)

export default app
