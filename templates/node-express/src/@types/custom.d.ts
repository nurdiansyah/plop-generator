type Logger = (...msg: any[]) => void

// extend express request object - https://stackoverflow.com/a/40762463/7009220
declare namespace Express {
  export interface Request {
     logger?: Logger
     token?: string
     user: { [k: string]: any }
  }
}
