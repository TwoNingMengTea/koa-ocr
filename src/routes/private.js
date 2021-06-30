const Router = require('@koa/router')
const controllers = require('../controllers')
const verifyHandler = require('../middlewares/verify')

const router = new Router()
router.prefix('/api')
router.use(verifyHandler)

router.post('/ocr/GeneralBasicOCR', controllers.ocr.GeneralBasicOCR)
router.post('/ocr/RecognizeTableOCR', controllers.ocr.RecognizeTableOCR)

module.exports = router
