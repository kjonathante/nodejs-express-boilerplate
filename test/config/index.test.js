const config = require('../../config')

describe('Test Configuration Infrastructure', () => {
  test('It should return the correct key', () => {
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    expect(config.secretKey).toBe(process.env.SECRET_KEY)
  })
})
