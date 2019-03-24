const faker = require('faker')
const fixtures = require('./fixtures')

function Articles(length = 0) {
  return Array(length)
    .fill(true)
    .map(() => ({
      uuid: faker.random.uuid(),
      imageUrl: faker.image.imageUrl(),
    }))
    .concat(Object.values(fixtures))
}

module.exports = Articles
