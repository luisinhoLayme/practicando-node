const { v4: uuid4 } = require('uuid')

const getUuid = () => uuid4()

module.exports = {
  getUuid
}
