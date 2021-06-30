const config = require('../config')

const verifyHandler = (ctx, next) => {
  try {
    if (ctx.request.headers['ocr-authorization'] === config.verifyCode) return next()
    throw { code: 400, message: 'ocrVerifyCode error'}
  } catch (err) {
    throw { code: 400, message: err.message }
  }
  next()
}

module.exports = verifyHandler
