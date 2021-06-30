const Router = require('@koa/router')
const controllers = require('../controllers')

const router = new Router()
router.prefix('/api')

router.get('/login', controllers.login.login)

module.exports = router
