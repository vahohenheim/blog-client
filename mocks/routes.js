const middlewares = require('./middlewares.js')

const routes = Object.values(middlewares).reduce(
  (obj, middleware) =>
    Object.assign(obj, {
      [middleware.path]: middleware.path,
    }),
  {},
)

console.log('\u001B[90m', ` Generating mocks/routes.json`, '\u001B[22m\u001B[39m')

module.exports = routes
