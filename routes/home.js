const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  const viewData = { greeting: 'Tēnā tātou!' }
  res.render('home', viewData)
})

module.exports = router
