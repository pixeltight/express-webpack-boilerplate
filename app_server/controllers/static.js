const nodemailer = require('nodemailer')
const expressValidator = require('express-validator')
const credentials = require('../../credentials')

/* GET home page. */
module.exports.about = (req, res) => {
  res.render('about', { title: 'About Jason Kerr' })
}

module.exports.contact = (req, res) => {
  res.render('contact', { title: 'Contact Jason Kerr' })
}

module.exports.sendMail = (req, res) => {
  console.log(req.body.user.name)
  console.log(req.body.user.email)
  console.log(req.body.user.message)

  req.checkBody('user.name', 'Name is a required field').notEmpty().isInt();
  req.assert('user.name', 'Invalid email')

  var errors = req.validationErrors()
  console.log(errors)

  if(errors) {
    res.render('contact', { title: 'PixelTight - Contact', flash: { type: 'alert-danger', messages: errors }})
  }
  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: credentials.gmail.user,
  //     pass: credentials.gmail.password
  //   }
  // })

  // let mailOptions = {
  //   from: req.body.user.name + '&lt;' + req.body.user.email + '&gt;',
  //   to: 'jkerr013@gmail.com',
  //   subject: 'PixelTight Form Response',
  //   text: req.body.user.message
  // }

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     res.render('contact', { title: 'PixelTight - Contact', msg: 'Error occurred. Message not sent.', err: true })
  //     return console.log(error)
  //   } else {
  //     res.render('contact', { title: 'PixelTight - Contact', msg: 'Message sent! Thank you.', err: false })
  //     return console.log('Message %s sent %s', info.messageId, info.response)
  //   }
  // })
}
