import { NodePlopAPI } from "plop";

// @ts-ignore
import { initMessage } from "./bin/plop-init";
import projectGenerator from "./libs/projects";

export default (plop: NodePlopAPI): void => {
  initMessage();
  projectGenerator(plop);
};
