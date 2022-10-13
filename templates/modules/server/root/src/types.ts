import { Logger, ModuleConfig } from "@deboxsoft/module-core";
import { MQEmitter } from "mqemitter";

export interface GftServerModuleConfig extends ModuleConfig {
  logger: Logger;
  event: MQEmitter;
}
