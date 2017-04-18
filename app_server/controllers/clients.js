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
	res.render('clientInfo', {
		title: 'Hello',
		name: 'Fredrik',
		client: clients.filter(function(key) {
			return key.id == req.params.id
		})
	})
}
