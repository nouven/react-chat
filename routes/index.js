const authRoute = require('./authRoute.js')
const routes = (app) => {
  app.use('/auth', authRoute)
}
module.exports = routes
