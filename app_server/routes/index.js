const express = require('express')
const router = express.Router()

let ctrlClients = require('../controllers/clients')
let ctrlStatic = require('../controllers/static')

// dynamic pages
router.get('/', ctrlClients.clientList)
router.get('/client', ctrlClients.clientInfo)

/* static pages */
router.get('/about', ctrlStatic.about)
router.get('/contact', ctrlStatic.contact)

module.exports = router
