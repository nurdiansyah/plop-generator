import { ServerApiConfig } from "@deboxsoft/module-core";
import { {{ pascalCase projectName }}ServerModuleConfig } from "../types";

export type {{ pascalCase projectName }}ServerApiOptions = {{ pascalCase projectName }}ServerModuleConfig & ServerApiConfig;

