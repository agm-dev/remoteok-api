const { join } = require('path')
const { load } = require('dotenv-safe')

load({
  path: join(__dirname, '..', '.env'),
  sample: join(__dirname, '..', '.env.example'),
})

module.exports = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev', // morgan options
  remoteokApiUrl: process.env.REMOTEOK_API_URL || 'https://remoteok.io/api',
  cacheMinutes: process.env.CACHE_MINUTES && !isNaN(parseInt(process.env.CACHE_MINUTES)) ? parseInt(process.env.CACHE_MINUTES) : 60,
}
