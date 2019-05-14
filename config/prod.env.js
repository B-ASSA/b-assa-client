'use strict'
const packageConfig = require('../package.json')

module.exports = {
  NODE_ENV: '"production"',
  ROOT_BASE: packageConfig.name
}
