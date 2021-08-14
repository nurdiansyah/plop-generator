/* This file does not include .interface to bypass JSON Schema Generation */
import { Request } from "express"
import admin from "firebase-admin"

import { DAO } from "../middleware/dao.middleware"

export interface ExtendedRequest extends Request {
  dao: DAO
  user: admin.auth.DecodedIdToken
  log: any
  token?: string
}

export default interface RequestSchema extends ExtendedRequest {}
