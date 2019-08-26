const config = require('../config')
const app = require('../server')(config)
const log = config.log()
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  log.info(`Listening on port ${PORT}`)
})
