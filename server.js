const express = require('express')
const hbs = require('express-handlebars')

const homeRoute = require('./routes/home')

const server = express()
module.exports = server

// Handlebars config
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Server config
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Routes/routers
server.use('/', homeRoute)
