import { initMessage } from "./bin/plop-init.js";
import projectGenerator from "./libs/libs/projects/index.js";
import moduleGenerator from "./libs/libs/modules/index.js";
import sveltekitGenerator from "./libs/libs/sveltekit/index.js";

export default (plop) => {
  initMessage();
  plop.setHelper("preCurly", (txt) => {
    return `$\{${txt}`;
  });
  projectGenerator(plop);
  moduleGenerator(plop);
  sveltekitGenerator(plop);
};
