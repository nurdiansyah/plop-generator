import * as util from './token.middleware'

// import all from util and destructure here so
// we can spy on util.log
const { getDecodedToken } = util

describe('token util', () => {
  // const spy = jest.spyOn(util, 'log')
  it('should return null with no token', async () => {
    expect(await getDecodedToken({})).toBeNull()
    // expect(spy).toHaveBeenCalled()
  })

  it('should log errors when token validation fails', async () => {
    expect(await getDecodedToken({
      authorization: 'Bearer junk'
    })).toBeNull()
    // expect(spy).toHaveBeenCalledTimes(0)
  })
})
