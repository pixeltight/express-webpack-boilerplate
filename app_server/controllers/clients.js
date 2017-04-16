/* GET 'home' page */
let clients = require('../models/clients.json')

module.exports.clientList = function (req, res) {
  res.render('clientList', {
    title: 'Jason Kerr Homepage',
    clients: clients
  })
}

module.exports.clientInfo = function (req, res) {
  res.render('clientInfo', {
    title: 'Client Information'
  })
}
