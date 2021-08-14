import { Actions, PromptQuestion } from 'node-plop';
export declare const prompts: PromptQuestion[];
declare enum Template {
    'cloudbuild' = 0,
    'github' = 1,
    'gitlab' = 2,
    'azure' = 3
}
export declare const pipelinesActionHandler: (type: Template, actions: any[], destination: string, templatePath: string) => Actions;
export {};
