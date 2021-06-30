const { logger } = require('./logger')

// 用于将 ctx.result 中的内容最终回传给客户端
const responseHandler = (ctx) => {
  if (ctx.result !== undefined) {
    ctx.type = 'json'
    ctx.body = {
      code: 200,
      message: ctx.msg || '请求成功',
      datas: ctx.result,
      success: true
    }
  }
}

// 处理在其它 middleware 中出现的异常，在 next() 后面进行异常捕获，出现异常直接进入这个中间件进行处理
const errorHandler = (ctx, next) => {
  return next().catch(err => {
    if (err.code == null) {
      logger.error(err.stack)
    }
    ctx.body = {
      code: err.code || -1,
      datas: null,
      message: err.message.trim(),
      success: false
    }
    ctx.status = err.code
    return Promise.resolve()
  })
}

module.exports = {
  responseHandler,
  errorHandler
}
