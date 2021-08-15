import * as path from 'path'

import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const resolversArray = fileLoader(path.join(__dirname, './**'), { recursive: true})

export default mergeResolvers(resolversArray)
