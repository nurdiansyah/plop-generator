import { NodePlopAPI } from "plop";

// @ts-ignore
import { initMessage } from "./bin/plop-init";
import projectGenerator from "./libs/projects";
import moduleGenerator from "./libs/modules";

export default (plop: NodePlopAPI): void => {
  initMessage();
  plop.setHelper("preCurly", (txt) => {
    return `$\{${txt}`;
  });
  projectGenerator(plop);
  moduleGenerator(plop);
};
