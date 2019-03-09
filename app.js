const { port, env } = require('./configs/vars')
const server = require('./configs/express')


server.listen(port, () => console.info(`server started on port ${port} at ${env} mode`))

module.exports = server
