export type Prompts = import("@nurdiansyah/node-plop").Prompts;
export type ActionType = import("@nurdiansyah/node-plop").ActionType;
export type Actions = ActionType[];
export type GeneratorOptions = {
    plop: import("@nurdiansyah/node-plop").NodePlopAPI;
    prompts: Prompts;
    actions: Actions;
    skipPattern?: RegExp | undefined;
    env?: Record<string, any> | undefined;
    recursive?: boolean | undefined;
    path?: string | undefined;
    templateDir?: string | undefined;
};
export type ActionOptions = {
    data?: Record<string, any> | undefined;
    actions?: Actions[] | undefined;
};
export type PromptOptions = {
    data?: Record<string, any> | undefined;
    prompts: Prompts[];
    templateDir?: string | undefined;
    path?: string | undefined;
};
export type ActionsCB = (options?: ActionOptions | undefined) => any;
export type PromptsCB = (options?: PromptOptions | undefined) => any;
export type GeneratorReturn = {
    actions: ActionsCB;
    prompts: PromptsCB;
};
export type PlopGeneratorFunction = (options: GeneratorOptions) => Actions | Promise<Actions>;
export type ModificationTemplatePattern = {
    key: string;
    template?: string | undefined;
    templateFile?: string | undefined;
};
