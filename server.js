/* eslint-disable no-unused-vars */

// import dependecies
const express = require('express')
const handlebars = require('express-handlebars')

const hbs = handlebars.create()

const indexRoutes = require('./src/routes/routes')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000
const url = process.env.DB_URL

app
  .set('view engine', 'hbs')
  .set('views', 'src/views')
  .engine('hbs', handlebars({ extname: 'hbs', defaultLayout: 'main.hbs' }))

  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static('public'))
  .use(indexRoutes)
  .listen(port, console.log('Server running!🎉'))
  
  app.use(function (req, res, next) {
  res.status(404).send('404 Page not found')
})