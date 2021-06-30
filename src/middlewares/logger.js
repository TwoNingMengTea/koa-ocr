const fs = require('fs')
const path = require('path')
const log4js = require('log4js')
const config = require('../config')

const logsDir = path.parse(config.logPath).dir
// 判断路径是否存在，不存在则新建
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir)

// 配置log4.js
log4js.configure({
  appenders: { // 输出
    console: { type: 'console' },
    dateFile: {
      type: 'dateFile',
      filename: config.logPath,
      pattern: '-yyyy-MM-dd'
    }
  },
  categories: { // 类型
    default: {
      appenders: ['console', 'dateFile'],
      level: 'info'
    }
  }
})

// 获取 logger 实例
const logger = log4js.getLogger('[Default]')

// logger中间件
const loggerHandler = async (ctx, next) => {
  // 开始时间
  const start = new Date()
  await next()
  // 结束时间
  const ms = new Date() - start
  // 打印参数
  const remoteAddress = ctx.headers['x-forwarded-for'] || ctx.ip || ctx.ips ||
    (ctx.socket && (ctx.socket.remoteAddress || (ctx.socket.socket && ctx.socket.socket.remoteAddress)))
  let logText = `${ctx.method} ${ctx.status} ${ctx.url} 请求参数： ${JSON.stringify(ctx.request.body)} 响应参数： ${JSON.stringify(ctx.body)} - ${remoteAddress} - ${ms}ms`
  logger.info(logText)
}

module.exports = {
  logger,
  loggerHandler
}
