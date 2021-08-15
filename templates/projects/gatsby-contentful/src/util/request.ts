import firebase from "gatsby-plugin-firebase"

const log = console.log

export type ResponseType = "text" | "blob"

export interface RequestOptions extends RequestInit {
  requireJSON?: boolean
}

export const token = async () => {
  return firebase.auth().currentUser?.getIdToken()
}

export async function request<T>(
  url: string,
  options?: RequestOptions,
  responseType?: ResponseType
): Promise<T>

export async function request(
  url: string,
  options?: RequestOptions,
  responseType?: ResponseType
): Promise<string>

export async function request<T>(
  url: string,
  options?: RequestOptions,
  responseType = "text"
) {
  log("request: fetching", url)

  const headers = new Headers()
  headers.append("Authorization", `Bearer ${await token()}`)
  headers.append("Content-Type", "application/json; charset=utf-8")

  let response
  try {
    response = await fetch(url, { headers, ...options, mode: 'cors' })
  } catch (err) {
    log("request: network error making request", err)
    throw err
  }
  const result = await parseResponse<T>(
    response,
    options?.requireJSON,
    responseType as ResponseType
  )
  log("request: result", result)
  return result
}

export async function parseResponse<T>(
  res: Response,
  requireJSON?: boolean,
  responseType?: ResponseType
): Promise<T>
export async function parseResponse(
  res: Response,
  requireJSON?: boolean,
  responseType?: ResponseType
): Promise<string>

export async function parseResponse(
  res: Response,
  requireJSON?: boolean,
  responseType?: ResponseType
) {
  const text = await res[responseType as ResponseType]()
  log("response status: ", res.status, text)
  if (res.status >= 300) {
    throw new Error(`${res.status} ${text}`)
  }
  try {
    return JSON.parse(text as string)
  } catch (e) {
    if (requireJSON) {
      throw new Error(`${text}`)
    }
  }
  return text
}
