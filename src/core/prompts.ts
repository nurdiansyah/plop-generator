import fs from "fs";
export const getPrompts = (plop, templatedDir, prompts: any[] = []) => {
  const recursivePrompts = (_templateDir: string) => {
    const dir = fs.readdirSync(_templateDir);
    dir.forEach((file, idx) => {
      const path = `${_templateDir}/projects/${file}`;
      if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
        return recursivePrompts(path);
      } else if (idx === dir.length - 1) {
        const choices = fs
          .readdirSync(_templateDir)
          .filter((filename) => filename.includes(".prompt"))
          .map((filename) => ({
            description: `${_templateDir}/projects/${filename}`,
            value: filename,
            checked: false,
          }));

        if (choices.length) {
          prompts.push({
            type: choices.length > 1 ? "checkbox" : "confirm",
            name: _templateDir,
            message:
              choices.length > 1
                ? `What additional ${_templateDir} files do you want`
                : `Do you want to include ${choices[0].description.replace(
                    ".prompt",
                    ""
                  )}?`,
            choices,
            when: (answers: { [k: string]: any }) =>
              answers.workspace ===
              _templateDir
                .replace(`${plop.getPlopfilePath()}/projects/templates/`, "")
                .split("/")[0],
          });
        }
      }
    });
  };
  recursivePrompts(templatedDir);
  return prompts;
};
