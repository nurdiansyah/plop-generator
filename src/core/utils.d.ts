export function getAppendAction(file: any, templateDir: any, action: any): any;
export function getPromptAction(file: any, tmpDir: any, data: any, action: any): any;
export function getPatternRegex(key: any, end?: boolean): RegExp;
export function createAppendMultipleAction({ template, path, key, data, templateFile, appendTemplates }: any): import("@nurdiansyah/node-plop").ActionType[];
export function createAppendAction({ append, path, template, data, unique }: {
    append?: string | undefined;
    path: any;
    template: any;
    data: any;
    unique?: boolean | undefined;
}): {
    type: string;
    path: any;
    data: any;
    pattern: RegExp;
    unique: boolean;
    template: any;
    skipIfExist?: undefined;
} | {
    type: string;
    path: any;
    data: any;
    skipIfExist: boolean;
    template: string;
    pattern?: undefined;
    unique?: undefined;
};
export function createTemplateAction({ basePath, templateFile, data, model, suffix }: TemplateActionOptions): import("@nurdiansyah/plop").ActionType[];
export type TemplateActionOptions = {
    data: Record<string, any>;
    templateFile: string;
    model: string;
    basePath: string;
    /**
     * ""} suffix
     */
    ""?: string | undefined;
};
