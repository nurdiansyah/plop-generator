export function getAppendAction(file: any, templateDir: any, action: any): any;
export function getPromptAction(file: any, tmpDir: any, data: any, action: any): any;
export function getPatternRegex(key: any): RegExp;
export function createAppendMultipleAction({ template, path, key, data, templateFile, appendTemplates }: any): import("@nurdiansyah/node-plop").ActionType[];
export function createAppendAction({ append, path, template, data }: {
    append?: string | undefined;
    path: any;
    template: any;
    data: any;
}): {
    type: string;
    path: any;
    data: any;
    pattern: RegExp;
    template: any;
    skipIfExist?: undefined;
} | {
    type: string;
    path: any;
    data: any;
    skipIfExist: boolean;
    template: string;
    pattern?: undefined;
};
