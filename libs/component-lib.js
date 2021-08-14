"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prompts = void 0;
exports.prompts = [
    {
        name: "includeBootstrappedComponentLib",
        when: (answers) => {
            const artifacts = ['mongo', 'graphql', 'svelte', 'module-user', 'uvu'];
            if (artifacts.includes(answers.workspace))
                return true;
            return false;
        },
        message: "pilih artifact2 yang akan dipakai?",
        type: 'confirm'
    }
];
