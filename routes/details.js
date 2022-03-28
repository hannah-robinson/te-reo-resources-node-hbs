const express = require('express')
const router = express.Router()
const { loadResources } = require('../lib')
// const resources = require('../data.json').resources

router.get('/:id', (req, res) => {
  loadResources('../data.json', (err, data) => {
    if (err != null) {
      res.sendStatus(500)
      return
    }
    const resource = data.resources.find(
      (resource) => resource.id == req.params.id
    )
    const viewData = {
      name: resource.name,
      image: resource.image,
      url: resource.url,
      description: resource.description,
      cost: resource.cost,
      languageLevel: resource.languageLevel,
      medium: resource.medium,
    }
    res.render('details', viewData)
  })
})

module.exports = router
