'use strict'

const path = require('path')
const http = require('http')
// const debug = require('debug')
const chalk = require('chalk')
const express = require('express')
const next = require('next')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()
const app = express()
const server = http.createServer(app)

// Set Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Set Static files
app.use(express.static(path.join(__dirname, 'public')))

// Before midlewares
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

nextApp.prepare().then(() => {
  app.get('/json', (req, res) => {
    res.json('hello')
  })

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/services/:id', (req, res) => {
    return nextApp.render(req, res, '/services', {
      id: req.params.id,
      ...req.query
    })
  })

  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, () => {
    console.log(`${chalk.green('[nextjs-cs:server]')} server listening on port ${port}`)
  })
})
