"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const plop_init_1 = require("./bin/plop-init");
const actions_1 = __importDefault(require("./libs/actions"));
const prompts_1 = __importDefault(require("./libs/prompts"));
const validations_1 = require("./libs/validations");
exports.default = (plop) => {
    plop_init_1.initMessage();
    plop.load('./plugins/pnpm-install.js', null, null);
    plop.setGenerator('project', {
        description: 'Module Project Files',
        prompts: [
            {
                type: 'list',
                name: 'workspace',
                default: 'create-react-app',
                choices: fs_1.default.readdirSync(plop.getPlopfilePath() + '/templates')
                    .map(dir => ({ name: dir, value: dir }))
            },
            {
                type: 'input',
                name: 'organization',
                message: 'organization name',
                validate: validations_1.validatePackageName,
            },
            {
                type: 'input',
                name: 'name',
                message: 'workspace name',
                validate: validations_1.validatePackageName,
            },
            ...prompts_1.default(plop),
        ],
        actions: actions_1.default.bind(null, plop)
    });
};
