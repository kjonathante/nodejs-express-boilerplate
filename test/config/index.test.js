const config = require('../../config')

describe('Test Configuration Infrastructure', () => {
  test('It should return the correct key', () => {
    expect(config.privateKey).toBe(process.env.PRIVATE_KEY)
  })
})
