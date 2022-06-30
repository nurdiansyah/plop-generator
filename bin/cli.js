#!/usr/bin/env node
import {config} from "dotenv";
import path from "path";
import minimist from "minimist";
import dboxCore from "@deboxsoft/module-core";

config();
const args = process.argv.slice(2);
const { Plop, run } = require("plop");
const argv = minimist(args);
Plop.launch(
  {
    cwd: argv.cwd,
    // In order for `plop` to always pick up the `plopfile.js` despite the CWD, you must use `__dirname`
    configPath: path.join(__dirname, "..", "plopfile.js"),
    require: argv.require,
    completion: argv.completion,
    // This will merge the `plop` argv and the generator argv.
    // This means that you don't need to use `--` anymore
  },
  (env) => {
    env.isMonorepo = process.env.IS_MONOREPO === "true" || false;
    const config = () => ({
      get: (key, defaultValue) =>
        env[dboxCore.camelCase(key)] ||
        process.env[dboxCore.constantCase(key)] ||
        defaultValue,
    });
    dboxCore.Container.set(dboxCore.CONFIG_KEY, config());
    run(env, undefined, true);
  }
);
