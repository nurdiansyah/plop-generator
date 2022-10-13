import { NodePlopAPI } from "plop";

export default (plop: NodePlopAPI) => {
  plop.setHelper("hbsVariable", (varName) => {
    return `{{ ${varName} }}`;
  });
};
