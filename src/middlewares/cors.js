const corsHandler = () => ({
  origin: function () {
    return '*'
  },
  exposeHeaders: ['Ocr-Authorization'], // 设置获取其他自定义字段
  maxAge: 5, // 指定本次预检请求的有效期，单位为秒。
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
})

module.exports = {
  corsHandler
}
