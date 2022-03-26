const express = require('express')
const hbs = require('express-handlebars')

const server = express()
module.exports = server

// Handlebars config
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Server config
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))