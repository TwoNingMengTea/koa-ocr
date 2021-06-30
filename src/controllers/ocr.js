const client = require('../lib/client')
const { throwInvalidMachOCRErrorCode } = require('../lib/error')

const ocr = {}

ocr.GeneralBasicOCR = async (ctx, next) => {
  await client.GeneralBasicOCR({
    ImageBase64: ctx.request.body.ImageBase64
  }).then(
    (data) => {
      ctx.result = data
    },
    (err) => {
      throwInvalidMachOCRErrorCode(err)
    }
  )
  return next()
}

ocr.RecognizeTableOCR = async (ctx, next) => {
  await client.RecognizeTableOCR({
    ImageBase64: ctx.request.body.ImageBase64
  }).then(
    (data) => {
      ctx.result = data
    },
    (err) => {
      throwInvalidMachOCRErrorCode(err)
    }
  )
  return next()
}

module.exports = ocr
