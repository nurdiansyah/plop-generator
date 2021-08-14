const tsj = require("ts-to-json")
const { promises: fs } = require("fs")
const pascalCase = require('pascalcase')

module.exports = (async () => {
  try {
    fileNames = await fs.readdir(__dirname + '/../src/interfaces')
    fileNames.forEach(fileName => {
      if (fileName.includes('.interface.ts')) {
        const name = pascalCase(fileName.split('.')[0])
        const config = {
          path: `${__dirname}/../src/interfaces/${fileName}`,
          tsconfig: __dirname + "/tsconfig.json",
          type: `${name}Schema`,
          expose: "export",
          jsDoc: "extended",
          topRef: true,
          ignoreMultipleDefinitions: true,
        }

        const output = __dirname + `/../src/schema/${name}.schema.json`.toLowerCase()
        const schema = tsj.createGenerator(config).createSchema(config.type)
        const schemaString = JSON.stringify(schema, null, 2)
        fs.writeFile(output, schemaString, (err) => {
          if (err) throw err
          console.info(`Generated JSON Schema ${output}`)
        })
      }
    })
    console.info('Successfully Generated JSON Schema')

  } catch (e) {
    console.error("error generating schema", e)
  }
})()
