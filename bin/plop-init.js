import chalk from "chalk";
// @ts-ignore
import packageJson from "../package.json" assert { type: "json" };

export const initMessage = () => {
  console.info(
    `${chalk.green(
      "Generator plop tools version",
      packageJson.version + "!"
    )} Pilih framework proyek yang akan dipakai:`
  );
};
