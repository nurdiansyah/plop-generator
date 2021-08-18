import { templateFilesGenerator } from "../../core/template-files";
import { GeneratorOptions, PlopGeneratorFunction } from "../../types";
import path from "path";

export const gatsbyGenerator: PlopGeneratorFunction = ({
  path: startingPath,
  plop,
  prompts,
}: GeneratorOptions) => {
  return ({ data, actions, templateDir }) => {
    const workspace = data.workspace;
    const whitelistedWorkspaces = ["gatsby", "gatsby-contentful"];
    if (!whitelistedWorkspaces.includes(workspace)) return [];
    // TODO: come back to. This works but I don't exactly like it since it's opinionated and dependent on each other
    templateFilesGenerator({
      plop,
      path: path.resolve(startingPath, "../shared-lib"),
      templateDir: `${templateDir}/shared-lib`,
      actions,
      prompts,
    })({ actions, data });
    templateFilesGenerator({
      plop,
      actions,
      path: `${startingPath}-components/`,
      templateDir: `${templateDir}/component-lib`,
      prompts,
    })({ actions, data });
    return actions;
  };
};
