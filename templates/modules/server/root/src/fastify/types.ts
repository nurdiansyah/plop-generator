import { ServerApiConfig } from "@deboxsoft/module-core";
import { FastifyJWTOptions } from "@fastify/jwt";
import { {{ pascalCase projectName }}ServerModuleConfig } from "../types.js";

export type {{ pascalCase projectName }}ServerApiOptions = {{ pascalCase projectName }}ServerModuleConfig &
  ServerApiConfig & {
  setCookieOpts?: {
    domain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    sameSite?: boolean;
  };
  jwtOpts?: FastifyJWTOptions & {
    jwtTypeStore?: boolean;
  };
};

