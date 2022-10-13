import { ActionType, NodePlopAPI, PromptQuestion } from "node-plop";

export type Actions = (ActionType & { type?: string })[];
export type Prompts = PromptQuestion[];

export interface GeneratorOptions {
  plop: NodePlopAPI;
  skipPattern?: RegExp;
  env?: Record<string, any>;
  recursive?: boolean;
  path?: string;
  templateDir?: string;
  prompts: Prompts;
  actions: Actions;
}

export interface ActionOptions {
  data?: Record<string, any>;
  actions?: Actions;
  templateDir?: string;
  path?: string;
}

export interface PromptOptions {
  data?: Record<string, any>;
  prompts?: Prompts;
  templateDir?: string;
  path?: string;
}

export interface GeneratorReturn {
  actions: (options: ActionOptions) => void;
  prompts: (options: PromptOptions) => void;
}

export type PlopGeneratorFunction = (options: GeneratorOptions) => (actionOptions: ActionOptions) => Actions;
