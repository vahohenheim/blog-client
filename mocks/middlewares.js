const glob = require('glob')
const path = require('path')

const middlewares = glob
  .sync(path.join(__dirname, 'middlewares', '*.js'))
  .map((file) => path.basename(file, '.js'))
  .filter((basename) => !['index'].includes(basename))
  .reduce(
    (obj, basename) =>
      Object.assign(obj, {
        [basename]: require(path.join(__dirname, 'middlewares', `${basename}.js`)),
      }),
    {},
  )

module.exports = middlewares
