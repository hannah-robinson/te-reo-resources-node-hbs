const express = require('express')
const hbs = require('express-handlebars')

const homeRoute = require('./routes/home')
const freeRoute = require('./routes/free-resources')
const detailsRoute = require('./routes/details')

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
server.use('/', freeRoute)
server.use('/', detailsRoute)
