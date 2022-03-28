const fs = require('fs')
const path = require('path')

function loadResources(fileName, callback) {
  fs.readFile(path.resolve(fileName), 'utf-8', (err, data) => {
    if (err) {
      callback(err)
      return
    }
    const resourcesFromFile = JSON.parse(data)
    callback(null, resourcesFromFile)
  })
}

module.exports = { loadResources }
