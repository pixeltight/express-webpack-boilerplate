/* GET 'home' page */
const express = require('express')
const app = express()

var clients = require('../models/clients.json')

module.exports.clientList = function (req, res) {
  res.render('clientList', {
    title: 'Jason Kerr Homepage',
    clients: clients
  })
}

module.exports.clientInfo = function (req, res) {
	var arrIndex = req.params.id - 1
  res.render('clientInfo', {
    title: 'Clients: ' + clients[arrIndex].name,
    client: clients.find(function (key) {
      return key.id == req.params.id
    })
  })
}
