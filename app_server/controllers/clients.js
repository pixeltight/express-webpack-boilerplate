const clients = require('../models/clients.json')

/* GET 'home' page */
module.exports.clientList = (req, res) => {
  res.render('clientList', {
    title: 'Jason Kerr Homepage',
    clients: clients
  })
}

module.exports.clientInfo = (req, res) => {
  let arrIndex = req.params.id - 1
  res.render('clientInfo', {
    title: 'Clients: ' + clients[arrIndex].name,
    client: clients.find(key => {
      return key.id === +req.params.id
    })
  })
}
