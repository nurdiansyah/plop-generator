import fs from 'fs'

import editJSONFile from 'edit-json-file'
import { argv } from 'yargs'

const [key, ...value] = argv._
const dirnames = fs.readdirSync(`${__dirname}/../src/locales`)

dirnames.forEach((dir: string) => {
  if (!dir.includes('.ts')) {
    const file = editJSONFile(`${__dirname}/../src/locales/${dir}/translations.json`)
    file.set(key.replace('.', '\\.'), dir === 'en' ? value.join(' ') : (file.get(key) || ''))
    file.save()
  }
})

console.info('Successfully Updated Translation Files')
process.exit(0)
