const chalk = require("chalk");
// @ts-ignore
const version = require("../package.json").version;

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
