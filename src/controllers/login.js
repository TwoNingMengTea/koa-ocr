const { InvalidQueryError } = require('../lib/error')

const login = {}
login.login = async (ctx, next) => {
  const { userName, password } = ctx.request.body
  if (!userName || !password) {
    throw new InvalidQueryError()
  }

  return next()
}

module.exports = login
