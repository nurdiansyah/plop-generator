import app from './app'
import { logger as log } from './middleware/logger.middleware'

const port = process.env.PORT || 4000

export const server = app.listen(port as number, () => {
  log.info(`'App started on port: ${port} NODE_ENV=${process.env.NODE_ENV} ${process.env.CLIENT_URL || ''}`.trim())
})

// server.on('connection', function(socket) {
//   // log.info("A new connection was made by a client.")
//   socket.setTimeout(30 * 1000)
//   // 30 second timeout. Change this as you see fit.
// })

process.on('uncaughtException', (err) => {
  log.error('App Crashed')
  log.error(err)
})

export default server
