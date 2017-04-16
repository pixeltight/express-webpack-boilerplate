/* GET home page. */
module.exports.about = (req, res) => {
  res.render('about', { title: 'About Jason Kerr' })
}

module.exports.contact = (req, res) => {
  res.render('contact', { title: 'Contact Jason Kerr' })
}
