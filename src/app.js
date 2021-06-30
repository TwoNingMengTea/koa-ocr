const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const config = require('')

const publicRouter = require('./routes/public')
const privateRouter = require('./routes/private')
const { loggerHandler } = require('./middlewares/logger')
const { errorHandler, responseHandler } = require('./middlewares/response')
const { corsHandler } = require('./middlewares/cors')

const app = new Koa()

app.use(cors(corsHandler))

// Logger
// app.use(loggerHandler)

// Error Handler
app.use(errorHandler)

// Global
app.use(bodyParser())

// Routes
app
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods())

app
  .use(privateRouter.routes())
  .use(privateRouter.allowedMethods())

// Response
app.use(responseHandler)

// app.listen(config.port, () => {
//   console.log('server is starting at port 9019')
// })
module.exports = app
