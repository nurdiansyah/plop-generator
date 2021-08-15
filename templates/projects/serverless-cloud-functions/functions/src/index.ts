import 'firebase-functions'

import * as functions from 'firebase-functions'

import {{pascalCase name}} from './services/index.ts'

export const helloWorld = functions.https.onRequest(async (_, response) => {
  await {{pascalCase name}}()
  response.send('Hello from Firebase!\n\n')
})
