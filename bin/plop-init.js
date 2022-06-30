import chalk from "chalk";
// @ts-ignore
import {version} from "../package.json";

module.exports = {
  initMessage: () => {
    console.info(
      `${chalk.green(
        "Generator plop tools version",
        version + "!"
      )} Pilih framework proyek yang akan dipakai:`
    );
  },
};
