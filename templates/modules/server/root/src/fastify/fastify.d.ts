import { HttpErrorReplys } from "@fastify/sensible/lib/httpError.js";
import { JwtPayload } from "@deboxsoft/users-api";
import "@fastify/jwt";

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: JwtPayload; // payload type is used for signing and verifying
    user: undefined;
  }
}
declare module "fastify" {
  interface FastifyRequest {
    userSession: JwtPayload;
  }
  // eslint-disable-next-line
  interface FastifyReply extends HttpErrorReplys {}
  interface FastifyInstance {
    authenticate(): Promise<void>;
  }
}
