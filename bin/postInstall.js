import chalk from "chalk";

console.info(`
  ## Usage with custom cli command via:
  ${chalk.yellow.bold("cre8-gen")}

  OR

  ## To get you going really quickly this project includes a setup step.
  // ${chalk.yellow.bold("package.json")}
  {
    "scripts": {
        "plop": "plop --plopfile ./node_modules/@deboxsoft/plop-generator/plopfile.js"
    },
    ...
  }
`);
