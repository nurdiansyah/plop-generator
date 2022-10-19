import { initMessage } from "./bin/plop-init.js";
import projectGenerator from "./src/libs/projects/index.js";
import moduleGenerator from "./src/libs/modules/index.js";
import sveltekitGenerator from "./src/libs/sveltekit/index.js";
import { setHelpers } from "./src/helpers.js";
import inquirer from "inquirer";

export default async (plop) => {
  initMessage();
  const promptModule = inquirer.createPromptModule();
  let answer = await promptModule({
    name: "typeGenerator",
    type: "list",
    message: "jenis generator yang akan dipilih:",
    choices: ["project", "module", "sveltekit"]
  });
  setHelpers(plop);
  switch (answer.typeGenerator) {
    case "project":
      projectGenerator(plop);
      break;
    case "module":
      await moduleGenerator(plop);
      break;
    case "sveltekit":
      sveltekitGenerator(plop);
      break;
  }
};
