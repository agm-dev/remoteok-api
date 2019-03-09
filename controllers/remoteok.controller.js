const httpStatus = require('http-status')
const RemoteOk = require('remoteok')
const cache = require('memory-cache')
const { remoteokApiUrl, cacheMinutes } = require('../configs/vars')


const CACHE_KEY = 'remotejobs'
const RO = new RemoteOk({ baseUrl: remoteokApiUrl })


exports.getJobs = async (req, res) => {

  let data = cache.get(CACHE_KEY)

  if (data === null) {
    try {
      await RO.getData()
      data = RO.data
      cache.put(CACHE_KEY, data, cacheMinutes * 60 * 1000)
    } catch (err) {
      throw err
    }
  }

  return res.status(httpStatus.OK).json(data)
}
