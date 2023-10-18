const Router = require('express')
const { login } = require('../controllers/index')
const { registration } = require('../controllers/index')
const router = new Router()

router.post('/registration', registration)
router.post('/login', login)

module.exports = router;