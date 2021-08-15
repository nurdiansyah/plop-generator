import './index'

const fTest = require('firebase-functions-test')({
  databaseURL: '',
  storageBucket: '',
  projectId: '',
}, '')

fTest.mockConfig({ bucket: { env: 'dev' }})

describe('Firebase Functions Testing', () => {
  // console.log(functions)
  it('successfully invokes function', async () => {
   expect(true).toBe(true) // write real tests
  })
})
