const express = require('express')
const router = express.Router()
const { loadResources, saveResources } = require('../lib')

router.get('/details/:id/edit', (req, res) => {
  loadResources('./data.json', (err, data) => {
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
    res.render('edit', viewData)
  })
})

router.post('/details/:id/edit', (req, res) => {
  loadResources('./data.json', (err, data) => {
    if (err != null) {
      res.sendStatus(500)
      return
    }
    const resource = data.resources.find(
      (resource) => resource.id == req.params.id
    )
    resource.name = req.body.name
    resource.image = req.body.image
    resource.url = req.body.url
    resource.description = req.body.description
    resource.cost = req.body.v
    resource.languageLevel = req.body.languageLevel
    resource.medium = req.body.medium

    const resourceIndex = data.resources.findIndex(
      (resource) => resource.id == req.params.id
    )

    data.resources.splice(resourceIndex, 1, resource)

    saveResources(data, () => {
      if (err != null) {
        res.sendStatus(500)
        return
      }
      res.redirect(`/details/${req.params.id}`)
    })
  })
})

module.exports = router
