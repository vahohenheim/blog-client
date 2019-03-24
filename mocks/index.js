const fs = require('fs')
const path = require('path')
const routes = require('./routes')
const Articles = require('./models/Articles')

fs.writeFileSync(path.join(__dirname, 'routes.json'), JSON.stringify(routes, null, 2))

module.exports = () => {
  return {
    articles: Articles(2),
  }
}
