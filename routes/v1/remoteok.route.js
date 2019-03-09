const express = require('express')
const remoteokController = require('../../controllers/remoteok.controller')


const router = express.Router()

router.get('/', remoteokController.getJobs)


module.exports = router
