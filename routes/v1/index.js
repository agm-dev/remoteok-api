const { Router } = require('express')
const remoteokRoutes = require('./remoteok.route')


const router = Router()

router.get('/status', (req, res) => res.json({ status: 'OK' }))
router.use('/remotejobs', remoteokRoutes)

module.exports = router
