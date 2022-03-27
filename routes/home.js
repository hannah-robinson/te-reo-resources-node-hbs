const express = require('express')
const router = express.Router()
const resources = require('../data.json').resources

router.get('/', (req, res) => {
  const viewData = {
    resources: resources,
  }
  res.render('home', viewData)
})

module.exports = router
