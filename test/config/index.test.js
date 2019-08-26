const config = require('../../config')

describe('Test Configuration Infrastructure', () => {
  test('It should return the correct key', () => {
    expect(config.secretKey).toBe(process.env.SECRET_KEY)
  })
})
