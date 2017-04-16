/* GET 'home' page */
module.exports.clientList = function (req, res) {
  res.render('clientList', {
    title: 'Jason Kerr Homepage',
    clients: [{
            name: 'Triad',
            description: 'i did work for Triad!'
        }, {
            name: 'Rooms to Go',
            description: 'i did work for Rooms to Go!'
        }, {
            name: 'Office Depot',
            description: 'i did work for Office Depot!'
        }]
  })
}

module.exports.clientInfo = function (req, res) {
  res.render('clientInfo', {
    title: 'Client Information'
  })
}
