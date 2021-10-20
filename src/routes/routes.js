const express = require('express')
const indexController = require('../controllers/indexController')
const router = express.Router()

// routes
router.get('/', indexController.getIndex)
router.get('/about', indexController.getAbout)
router.get('/diensten', indexController.getDiensten)
router.get('/tarieven', indexController.getTarieven)
router.get('/contact', indexController.getContact)


module.exports = router