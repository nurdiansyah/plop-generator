import { ServerApiConfig } from "@deboxsoft/module-core";
import { {{ pascalCase projectName }}ServerModuleConfig } from "../types";

export type LmsServerApiOptions = {{ pascalCase projectName }}ServerModuleConfig & ServerApiConfig;

