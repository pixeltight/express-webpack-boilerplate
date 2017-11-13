const clients = require('../models/clients.json')

/* GET 'home' page */
module.exports.clientList = (req, res) => {
  res.render('clientList', {
    title: 'Jason Kerr Frontend Developer Tampa, Florida',
    active_home: true,
    clients
  })
}

module.exports.clientInfo = (req, res) => {
  let arrIndex = req.params.id - 1

  let startPage = 1
  let endPage = 6
  let currentPage = parseInt(req.params.id)
  let prevPage = currentPage - 1

  if (prevPage < startPage) {
    prevPage = endPage
  }
  let nextPage = currentPage + 1
  if (nextPage > endPage) {
    nextPage = startPage
  }
  res.render('clientInfo', {
    title: 'Clients: ' + clients[arrIndex].name,
    client: clients.find(key => {
      return key.id === parseInt(req.params.id)
    }),
    active_portfolio: true,
    prevPage: prevPage,
    nextPage: nextPage,
    index: currentPage,
    clients
  })
}
