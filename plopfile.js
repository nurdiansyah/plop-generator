"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plop_init_1 = require("./bin/plop-init");
const projects_1 = __importDefault(require("./libs/projects"));
const modules_1 = __importDefault(require("./libs/modules"));
exports.default = (plop) => {
    plop_init_1.initMessage();
    plop.setHelper("preCurly", (txt) => {
        return `$\{${txt}`;
    });
    projects_1.default(plop);
    modules_1.default(plop);
};
