const handler = require('../handler')
const routes = (app) => {
  app.use('/auth', require('./authRoute.js'))
  app.use('/message', require('./messageRoute.js'))
  app.use('/room', handler.verifyToken, require('./roomRoute.js'))
  app.use('/user', handler.verifyToken, require('./userRoute.js'))
}
module.exports = routes
