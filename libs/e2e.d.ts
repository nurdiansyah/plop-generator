import { Actions, PromptQuestion } from 'node-plop';
import { NodePlopAPI } from 'plop';
export declare const prompts: PromptQuestion[];
export declare const e2eActionsHandler: (data: any, actions: any[], recursiveFiles: (s: string, s2: string) => any, startingPath: string, plop: NodePlopAPI) => Actions;
