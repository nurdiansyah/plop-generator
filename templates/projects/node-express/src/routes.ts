import { Request, Response, Router } from 'express'

import * as versionController from './controllers/version-controller'
import { decodeToken, isAuthorized } from './middleware/token.middleware'

export const routes = (router: Router) => {
  /* service discovery/healthcheck */
  router.route('/').get((_: Request, res: Response) => {
    return res.status(200).json({
      message: 'Api Service Routes!',
      statusCode: 200,
    })
  })

  /* Insert Routes/Handlers from Controllers */
  router
    .route('/version')
    .post(decodeToken, isAuthorized, versionController.post)
  router
    .route('/version')
    .get(versionController.get)
}

export default routes
