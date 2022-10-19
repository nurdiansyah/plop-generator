export const prompts = [
    {
        name: "includeBootstrappedComponentLib",
        when: (answers) => {
            const artifacts = ["mongo", "graphql", "svelte", "module-user", "uvu"];
            return artifacts.includes(answers.workspace);
        },
        message: "pilih artifact2 yang akan dipakai?",
        type: "confirm"
    }
];
