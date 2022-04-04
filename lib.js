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

function saveResources(data, callback) {
  const resourcesString = JSON.stringify(data, null, 2)
  fs.writeFile(path.resolve('./data.json'), resourcesString, (err) => {
    if (err) {
      callback(err)
      return
    }
    callback()
  })
}

module.exports = { loadResources, saveResources }
