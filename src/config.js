const path = require('path')

const developmentConfig = {
  env: 'development',
  port: '9019',
  verifyCode: '123456789',
  secretId: 'AKIDnPlqfDUUDfrmRpwmLdeOr65pKYfV4MO9',
  secretKey: 'VjhOoysVrwlJaaJlwqTqxnMefPs40f4C',
  region: 'ap-shanghai',
}

const testConfig = {
  env: 'test',
  port: '9019',
  verifyCode: '123456789',
  secretId: 'AKIDnPlqfDUUDfrmRpwmLdeOr65pKYfV4MO9',
  secretKey: 'VjhOoysVrwlJaaJlwqTqxnMefPs40f4C',
  region: 'ap-shanghai',
}

const productionConfig = {
  env: 'production',
  port: '9019',
  verifyCode: '123456789',
  secretId: 'AKIDnPlqfDUUDfrmRpwmLdeOr65pKYfV4MO9',
  secretKey: 'VjhOoysVrwlJaaJlwqTqxnMefPs40f4C',
  region: 'ap-shanghai',
}

const env = process.env.NODE_ENV || 'development'

const getConfig = (env) => {
  switch (env) {
    case 'development':
      return developmentConfig
    case 'test':
      return testConfig
    case 'production':
      return productionConfig
    default:
      return developmentConfig
  }
}

const config = getConfig(env)

module.exports = {
  ...config,
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log')
}
