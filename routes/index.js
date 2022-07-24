const handler = require('../handler')
const routes = (app) => {
  app.use('/auth', require('./authRoute.js'))
  app.use('/message', require('./messageRoute.js'))
  app.use('/room', handler.verifyToken, require('./roomRoute.js'))
}
module.exports = routes
