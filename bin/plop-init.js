"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMessage = void 0;
const chalk_1 = __importDefault(require("chalk"));
const package_json_1 = require("../package.json");
const initMessage = () => {
    console.info(`${chalk_1.default.green('Generator plop tools version', package_json_1.version + '!')} Pilih framework proyek yang akan dipakai:`);
};
exports.initMessage = initMessage;
