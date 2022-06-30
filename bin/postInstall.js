import chalk from "chalk";
// @ts-ignore
import pkg from "../package.json";

console.info(`
  ${chalk.green("Hey there! 👋")}

  Thanks for giving the ${pkg.name} a try. 🎉

  ## Usage with custom cli command via:
  ${chalk.yellow.bold("plop-gen")}

  OR

  ## To get you going really quickly this project includes a setup step.
  // ${chalk.yellow.bold("package.json")}
  {
    "scripts": {
        "plop": "plop --plopfile ./node_modules/@deboxsoft/plop-generator/plopfile.js"
    },
    ...
  }

  ${chalk.yellow.bold("npm run setup")} automates the following step for you:
    - add npm script to file ${chalk.yellow("./package.json")}

  When this is done run:

  ${chalk.yellow(
    "npm run plop"
  )} to use the monorepo project generator and follow the prompts.

`);
