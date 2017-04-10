const express = require('express')
const router = express.Router()
let ctrlMain = require('../controllers/main')

// GET home page
router.get('/', ctrlMain.homePage)

module.exports = router
