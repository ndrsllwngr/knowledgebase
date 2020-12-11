const sortedTOC = require('./table-of-contents')

const TOC = sortedTOC()

module.exports = {
  someSidebar: TOC
}
