class CodedError extends Error {
  constructor (message = '未知错误', code = -1) {
    super(message)
    this.code = code
  }
}
/**
 * 拒绝访问构造函数
 */
class ForbiddenError extends CodedError {
  constructor (message = '拒绝访问') {
    super(message, 403)
  }
}
/**
 * 无效的参数构造函数
 */
class InvalidQueryError extends CodedError {
  constructor (message = '无效的参数') {
    super(message, 400)
  }
}
/**
 * OCR公共错误码
 */
class InvalidOCRErrorCode extends CodedError {
  constructor(message = 'ocr error', code = 500) {
    super(message, code)
  }
}

const throwInvalidMachOCRErrorCode = (err) => {
  throw new InvalidOCRErrorCode(err.code)
}

module.exports = {
  CodedError,
  ForbiddenError,
  InvalidQueryError,
  InvalidOCRErrorCode,
  throwInvalidMachOCRErrorCode
}
