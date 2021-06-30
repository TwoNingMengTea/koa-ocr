const tencentcloud = require('tencentcloud-sdk-nodejs')
const { secretId,  secretKey, region } = require('../config')

// 导入对应产品模块的client models
const OcrClient = tencentcloud.ocr.v20181119.Client;

const clientConfig = {
  credential: {
    secretId: secretId,
    secretKey: secretKey,
  },
  region: region,
  profile: {
    httpProfile: {
      endpoint: 'ocr.tencentcloudapi.com',
    },
  },
}

const client = new OcrClient(clientConfig)

module.exports = client
