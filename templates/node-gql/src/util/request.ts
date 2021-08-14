import fetch, { RequestInit, Response } from 'node-fetch'

import { logger } from '../middleware/logger.middleware'

const log = logger('app:util:request')

export interface RequestOptions extends RequestInit {
  requireJSON?: boolean
}

export async function request<T>(url: string, options?: RequestOptions): Promise<T>
export async function request(url: string, options?: RequestOptions): Promise<string>

export async function request<T>(
  url: string,
  options: RequestOptions
) {
  log.info('request: fetching', url)
  let response
  try {
    response = await fetch(url, options)
  } catch (err) {
    log.info('request: network error making request', err)
    throw err
  }
  const result = await parseResponse<T>(response, options.requireJSON)
  log.info('request: result', result)
  return result
}

export async function parseResponse<T>(res: Response, requireJSON?: boolean): Promise<T>
export async function parseResponse(res: Response, requireJSON?: boolean): Promise<string>

export async function parseResponse(res: Response, requireJSON?: boolean) {
  const text = await res.text()
  log.info('response status: ', res.status, text)
  if (res.status >= 300) {
    throw new Error(`${res.status} ${text}`)
  }
  try {
    return JSON.parse(text)
  } catch (e) {
    if (requireJSON) {
      throw new Error(`${res.status} ${text}`)
    }
  }
  return text
}
