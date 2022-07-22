const routes = (app) => {
  app.use('/auth', require('./authRoute.js'))
  app.use('/message', require('./messageRoute.js'))
  app.use('/room', require('./roomRoute.js'))
}
module.exports = routes
