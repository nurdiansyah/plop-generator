import { getConfigService } from "@deboxsoft/module-core/libs/config";
import { validatePackageName, templateFilesGenerator } from "../../core/index.js";
const generatorId = "sveltekit";
export default (plop) => {
    const config = getConfigService();
    const templateDir = `${plop.getPlopfilePath()}/templates/${generatorId}`;
    const actions = [];
    const prompts = [
        {
            type: "input",
            name: "projectName",
            message: "module name",
            validate: validatePackageName
        }
    ];
    const env = {
        generatorId
    };
    prompts.push({
        type: "input",
        name: "model",
        message: "model name",
        validate: validatePackageName
    });
    const generatorOptions = {
        plop,
        env,
        prompts,
        actions,
        templateDir
    };
    plop.setGenerator(generatorId, {
        description: "generator sveltekit route",
        prompts,
        actions: (data = {}) => {
            data = { ...data, ...env };
            const startingPath = __dirname;
            const actionOptions = {
                actions,
                path: startingPath,
                templateDir,
                data
            };
            /* GENERATE SELECTED WORKSPACE FILES */
            /* APPEND CUSTOM ACTION HANDLERS BELOW */
            /***************👇👇👇*************** */
            templateFilesGenerator({
                prompts,
                actions,
                env: data,
                plop,
                recursive: true,
                templateDir,
                path: __dirname
            })({ data, actions, templateDir, path: __dirname });
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
        }
    });
};
