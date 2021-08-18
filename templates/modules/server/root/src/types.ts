import type { Logger } from "@deboxsoft/module-core";
import type { MQEmitter } from "mqemitter";

export interface AccountingModuleOptions {
  errors: Record<string, string>;
  logger: Logger;
  event: MQEmitter;
}
