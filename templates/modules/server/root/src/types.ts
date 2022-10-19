import { Logger, ModuleConfig } from "@deboxsoft/module-core";
import { MQEmitter } from "mqemitter";

export interface {{ pascalCase projectName }}ServerModuleConfig extends ModuleConfig {
  logger: Logger;
  event: MQEmitter;
}
