import fs from "fs";
import { getConfigService } from "@deboxsoft/module-core/libs/config";
import { validatePackageName } from "../../core/index.js";
import { moduleApiGenerator } from "./api.js";
import { moduleServerGenerator } from "./server.js";
import { moduleClientGenerator } from "./client.js";
const generatorId = "modules";
export default (plop) => {
    const config = getConfigService();
    const templateDir = `${plop.getPlopfilePath()}/templates/${generatorId}`;
    const actions = [];
    const prompts = [
        {
            type: "input",
            name: "moduleName",
            message: "module name",
            validate: validatePackageName,
        },
    ];
    const env = {
        isMonorepo: config.get("is-monorepo"),
        generatorId,
    };
    if (!env.isMonorepo) {
        prompts.push({
            type: "list",
            name: "modulePackage",
            choices: fs
                .readdirSync(templateDir)
                .map((dir) => ({ name: dir, value: dir })),
        });
    }
    prompts.push({
        type: "input",
        name: "model",
        message: "model name",
        validate: validatePackageName,
    });
    const generatorOptions = {
        plop,
        env,
        prompts,
        actions,
        templateDir,
    };
    const moduleApiAction = moduleApiGenerator(generatorOptions);
    const moduleServerAction = moduleServerGenerator(generatorOptions);
    const moduleClientAction = moduleClientGenerator(generatorOptions);
    plop.setGenerator(generatorId, {
        description: "generator module deboxsoft framework",
        prompts,
        actions: (data = {}) => {
            data = { ...data, ...env };
            const isMonorepo = data.isMonorepo || false;
            const cwd = process.cwd();
            const startingPath = `${cwd}${isMonorepo ? "/packages" : ""}`;
            const actionOptions = {
                actions,
                path: startingPath,
                templateDir,
                data,
            };
            /* GENERATE SELECTED WORKSPACE FILES */
            /* APPEND CUSTOM ACTION HANDLERS BELOW */
            /***************👇👇👇*************** */
            if (isMonorepo) {
                moduleApiAction(actionOptions);
                moduleClientAction(actionOptions);
                moduleServerAction(actionOptions);
            }
            else {
                if (data.modulePackage === "api") {
                    moduleApiAction(actionOptions);
                }
                else if (data.modulePackage === "server") {
                    moduleServerAction(actionOptions);
                }
                else if (data.modulePackage === "client") {
                    moduleClientAction(actionOptions);
                }
            }
            /* DEDUPE ACTIONS */
            const _tmp = {};
            return actions.reduce((acc, curr) => {
                // @ts-ignore
                const path = curr?.path;
                if (path) {
                    if (_tmp[path]) {
                        return acc;
                    }
                    if (!!curr) {
                        _tmp[path] = curr;
                        acc.push(curr);
                    }
                }
                else {
                    // add action not file type
                    acc.push(curr);
                }
                return acc;
            }, []);
        },
    });
};
