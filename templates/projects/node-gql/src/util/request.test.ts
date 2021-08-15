import fetch, { Response } from 'node-fetch'
import { mocked } from 'ts-jest/utils'

import { parseResponse, request } from './request'

export interface Test {
  hey: string
}

describe('request', () => {
  it('throws when fetch cant fetch', async () => {
    await expect(request('throw.yo', {}))
      .rejects.toThrow()
  })
})

describe('parseResponse', () => {
  test('it should parse json', async () => {
    const mockResponse = new Response(
      JSON.stringify({
        hey: 'ho'
      })
    )
    const parsed = await parseResponse<Test>(
      mockResponse
    )
    expect(parsed.hey).toBe('ho')
  })

  test('it parses string', async () => {
    const mockResponse = new Response(
       'foo'
    )
    const parsed = await parseResponse(
      mockResponse
    )
    expect(parsed).toBe('foo')
  })

  it('throws with error status', async () => {
    const mockResponse = new Response(
      'Bad', { status: 502 }
   )
    await expect(parseResponse(mockResponse))
      .rejects.toThrow()
  })

  it('should require json', async () => {
    const mockResponse = new Response(
      '<html>nontparsiblejson</html>'
    )
    await expect(parseResponse(
      mockResponse, true
    )).rejects.toThrow()
  })
})
