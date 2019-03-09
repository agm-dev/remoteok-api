const express = require('express')
const morgan = require('morgan')
const { logs } = require('./vars')
const helmet = require('helmet')
const cors = require('cors')
const routes = require('../routes/v1')
const error = require('../utils/errors')


const server = express()

// middleware link
server.use(morgan(logs))

server.use(helmet())

server.use(cors())

server.use('/v1', routes)

server.use(error.notFound)
server.use(error.handler)

module.exports = server
