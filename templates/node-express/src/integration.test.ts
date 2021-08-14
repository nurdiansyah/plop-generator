import request from 'supertest'
import proxyquire from 'proxyquire'
const firebasemock = require('firebase-mock')
// import casual from 'casual'

const mockauth = new firebasemock.MockAuthentication()
const mockdatabase = new firebasemock.MockFirebase()
const mockfirestore = new firebasemock.MockFirestore()
const mocksdk = new firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  (path: string): any => {
    return path ? mockdatabase.child(path) : mockdatabase
  },
  // use null if your code does not use AUTHENTICATION
  (): any => {
    return mockauth
  },
  // use null if your code does not use FIRESTORE
  (): any => {
    return mockfirestore
  },
  // use null if your code does not use STORAGE
  (): any => {
    return null
  },
  // use null if your code does not use MESSAGING
  (): any => {
    return null
  }
)

jest.mock('../src/util/firebase.ts', () => {
  return mocksdk
})

import app from '../src/app'

proxyquire('../src/util/firebase.ts', {
  firebase: mocksdk
})


describe('Integration Tests', () => {
  let ref: any
  let user: any
  let dbRef: any
  beforeAll(async () => {
    jest.clearAllMocks()
    ref = mockauth
    ref.autoFlush()
    dbRef = mockfirestore
    dbRef.autoFlush()

    // create user
    user = await ref.createUser({
      uid: '123',
      email: 'test@test.com',
    })
    await ref.setCustomUserClaims('123', { admin: true })
  })

  afterAll(() => {
    ref.autoFlush()
    dbRef.autoFlush()
  })

  it('should return a 200 - get the app version', async () => {
    const res: any = await request(app)
      .get('/api/version')
    expect(res.statusCode).toEqual(200)
  })
  it('should return a 200 - post to app version with auth', async () => {
    const token = await user.getIdToken()
    const res: any = await request(app)
      .post('/api/version')
      .set('Authorization', 'Bearer ' + token)
    expect(res.statusCode).toEqual(204)
  })
  it('should return a 400 - post to app version without auth tokens', async () => {
    const res: any = await request(app)
      .post('/api/version')
    expect(res.statusCode).toEqual(400)
  })
})
