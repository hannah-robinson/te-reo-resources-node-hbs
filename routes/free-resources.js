const express = require('express')
const router = express.Router()
const resources = require('../data.json').resources

router.get('/', (req, res) => {
  const viewData = {
    resources: resources,
  }
  res.render('free-resources', viewData)
})

module.exports = router
