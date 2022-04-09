const express = require('express')
const router = express.Router()
const { loadResources, saveResources } = require('../lib')

router.get('/add', (req, res) => {
  loadResources('./data.json', (err, data) => {
    if (err != null) {
      res.sendStatus(500)
      return
    }

    const viewData = {
      name: '',
      image: '',
      url: '',
      description: '',
      cost: '',
      languageLevel: '',
      medium: '',
      id: '',
    }
    res.render('add', viewData)
  })
})

router.post('/add', (req, res) => {
  loadResources('./data.json', (err, data) => {
    if (err != null) {
      res.sendStatus(500)
      return
    }
    const resource = {
      name: req.body.name,
      image: req.body.image,
      url: req.body.url,
      description: req.body.description,
      cost: req.body.cost,
      languageLevel: req.body.languageLevel,
      medium: req.body.medium,
      id: data.resources.length + 1,
    }

    data.resources.push(resource)

    saveResources(data, () => {
      if (err != null) {
        res.sendStatus(500)
        return
      }
      res.redirect(`/details/${resource.id}`)
    })
  })
})

module.exports = router
