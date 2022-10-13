import { ActionType, PromptQuestion } from "node-plop";
import { GeneratorOptions, Actions, PlopGeneratorFunction } from "../../types.js";

const prompts: PromptQuestion[] = [
  {
    name: "CICD",
    when: (answers: { workspace: string }) => {
      const blacklist = ["shared-lib", "cypress-e2e"];
      return !blacklist.includes(answers.workspace);
    },
    choices: [
      { name: "Google Cloud Build", value: "cloudbuild" },
      { name: "GitHub Actions", value: "github" },
      { name: "GitLab CI", value: "gitlab" },
      { name: "Azure DevOps", value: "azure" },
      { name: "None", value: false }
    ],
    message: "Do you want to include a CICD pipeline?",
    type: "list"
  }
];

enum Template {
  "cloudbuild",
  "github",
  "gitlab",
  "azure"
}

const getCustomBasePath = (type: Template, defaultPath: string) => {
  const customBasePath = {
    cloudbuild: defaultPath,
    github: `${process.env.cwd}/.github/workflows/`,
    gitlab: process.cwd(),
    azure: defaultPath
  };
  return customBasePath[type];
};

const pipelinesActionHandler = (
  type: Template,
  actions: Actions,
  destination: string,
  templatePath: string
): ActionType[] => {
  if (!type) return actions;

  const templateFiles = {
    cloudbuild: [`${templatePath}/pipelines/cloud*`],
    github: [`${templatePath}/.github/**`],
    gitlab: [],
    azure: []
  };

  actions.push({
    type: "addMany",
    destination: getCustomBasePath(type, destination),
    base: templatePath,
    templateFiles: templateFiles[type],
    stripExtensions: [".custom"]
  });
  return actions;
};

export const pipelinesGenerator: PlopGeneratorFunction = (options: GeneratorOptions) => {
  options.prompts.push(...prompts);
  return ({ data = { CICD: undefined }, actions = [] } = {}) =>
    pipelinesActionHandler(data.CICD, options.actions, options.path || "./", options.templateDir || "./");
};
