"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePackageName = void 0;
const validatePackageName = (value) => {
    if (/^([a-zA-Z0-9\-]+)$/.test(value)) {
        return true;
    }
    return 'Name cannot have spaces or special characters other than dashes.';
};
exports.validatePackageName = validatePackageName;
