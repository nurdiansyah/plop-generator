import { InitServiceResponse } from '../interfaces/init-service.interface';
import log from "../util/logger"

export const initService = async (): InitServiceResponse => {
  log.info('Init Service')
  // INSERT LOGIC
  // make some async calls
  return Promise.resolve()
}

export default initService
