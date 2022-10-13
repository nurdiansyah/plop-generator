#!/usr/bin/env node
import path from "node:path";
import minimist from "minimist";
import { Container, camelCase, constantCase } from "@deboxsoft/module-core";
import { CONFIG_KEY } from "@deboxsoft/module-core/libs/config";
import { Plop, run } from "plop";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const argv = minimist(args);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

Plop.prepare(
  {
    cwd: argv.cwd,
    configPath: path.join(__dirname, "..", "plopfile.js"),
    preload: argv.preload || [],
    completion: argv.completion,
  },
  (env) =>
    Plop.execute(env, (env) => {
      env.isMonorepo = process.env.IS_MONOREPO === "true" || false;
      const config = () => ({
        get: (key, defaultValue) =>
          env[camelCase(key)] || process.env[constantCase(key)] || defaultValue,
      });
      Container.set(CONFIG_KEY, config());
      const opts = {
        ...env,
      };
      return run(opts, undefined, true);
    })
);
