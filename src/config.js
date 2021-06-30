const path = require('path')

module.exports = {
  port: '3001',
  verifyCode: '123456789',
  secretId: 'AKIDnPlqfDUUDfrmRpwmLdeOr65pKYfV4MO9',
  secretKey: 'VjhOoysVrwlJaaJlwqTqxnMefPs40f4C',
  region: 'ap-shanghai',
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log')
}
