const middlewares = require('../middlewares.js')

module.exports = (req, res, next) => {
  Object.keys(middlewares).forEach((middleware) => middlewares[middleware].middleware(req, res))
}
