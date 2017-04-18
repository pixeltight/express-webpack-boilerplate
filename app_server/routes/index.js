const express = require('express')
const app = express()
const router = express.Router()
const clients = require('../models/clients.json')

const ctrlClients = require('../controllers/clients')
const ctrlStatic = require('../controllers/static')

router.all('/clients/:id/', function(req, res, next) {
  
  // index 0 = id:1 in clients model
  req.id = clients[req.params.id - 1];
  if (req.id) {
    console.log(req.id)
    next();
  } else {
    res.render('404')
  }
});

// dynamic pages
router.get('/', ctrlClients.clientList)
router.get('/clients/:id', ctrlClients.clientInfo)

/* static pages */
router.get('/about', ctrlStatic.about)
router.get('/contact', ctrlStatic.contact)

module.exports = router
