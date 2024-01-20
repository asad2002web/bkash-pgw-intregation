const express =require('express')
const {testController, testSendProduct, getProducts, getSingleProducts} = require('../controller/test.controller')
const router = express.Router()

router.get('/test', testController)
router.get('/products', getProducts)
router.get('/products/:id', getSingleProducts)
router.post('/products', testSendProduct)

module.exports = router