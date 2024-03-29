import { spawn } from "child_process";
const didSucceed = (code) => `${code}` === "0";
function npmInstall(_, config) {
    const spawnOptions = config.verbose
        ? {
            cwd: config.path,
            shell: true,
            stdio: "inherit",
        }
        : {
            cwd: config.path,
        };
    return new Promise((resolve, reject) => {
        const npmI = spawn("pnpm", ["install"], spawnOptions);
        npmI.on("close", (code) => {
            if (didSucceed(code)) {
                resolve(`pnpm install ran correctly`);
            }
            else {
                reject(`pnpm install exited with ${code}`);
            }
        });
    });
}
export default function (plop) {
    plop.setDefaultInclude({ actionTypes: true });
    plop.setActionType("pnpm-install", npmInstall);
}
