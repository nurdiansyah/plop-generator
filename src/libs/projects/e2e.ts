import { templateFilesGenerator } from "../../core/index.js";
import { PromptQuestion } from "node-plop";
import { GeneratorOptions, PlopGeneratorFunction } from "../../types.js";

const promptsE2e: PromptQuestion[] = [
  {
    name: "includeE2E",
    when: (answers: { workspace: string }) => {
      const clientList = ["gatsby", "gatsby-contentful", "next", "component-lib", "create-react-app"];
      return clientList.includes(answers.workspace);
    },
    message: "Do you want to include a cypress e2e suite?",
    type: "confirm"
  }
];

export const e2eGenerator: PlopGeneratorFunction = ({ plop, prompts }: GeneratorOptions) => {
  prompts.push(...promptsE2e);
  return ({ data = {}, actions = [], path }) => {
    if (data.includeE2E || data.workspace === "cypress-e2e") {
      const templateDir = `${plop.getPlopfilePath()}/templates/projects/cypress-e2e`;

      templateFilesGenerator({
        path,
        plop,
        prompts,
        actions,
        env: data,
        templateDir
      })({
        path: `${path}-e2e/`
      });
      const pnpmAction = {
        type: "pnpmInstall",
        path: `${path}-e2e/`,
        verbose: true
      };
      actions.push(pnpmAction);
    }
    return actions;
  };
};
