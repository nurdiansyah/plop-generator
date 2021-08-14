/* This file does not include .interface to bypass JSON Schema Generation */

import { Request } from "express"
import admin from "firebase-admin"

export interface ExtendedRequest extends Request {
  dao: { [k: string]: { [k: string]: any } }
  user: admin.auth.DecodedIdToken
  log: any
  token?: string
}

export default interface RequestSchema extends ExtendedRequest {}
