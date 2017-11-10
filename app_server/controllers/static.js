const nodemailer = require('nodemailer')
const ses = require('nodemailer-ses-transport')
const credentials = require('../../credentials')

/* GET home page. */
module.exports.about = (req, res) => {
  res.render('about', {
    title: 'About Jason Kerr',
    active_about: true
  })
}

module.exports.contact = (req, res) => {
  res.render('contact', {
    title: 'Contact Jason Kerr',
    active_contact: true
  })
}

module.exports.sendMail = (req, res) => {
    let transporter = nodemailer.createTransport(ses({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey
  }))

  req.checkBody('user.name', 'Name is a required field').notEmpty()
  req.checkBody('user.email', 'Please enter a valid email address').isEmail()
  req.checkBody('user.message', 'Please enter a message').notEmpty()

  let suser = req.sanitizeBody('user.name').escape().trim();
  let semail = req.sanitizeBody('user.email').escape().trim();
  let smessage = req.sanitizeBody('user.message').escape().trim();

  let mailOptions = {
    from: 'jkerr@pixeltight.com',
    to: 'jkerr@pixeltight.com',
    subject: 'PixelTight Form Response',
    text: suser + '\r\n' + semail + '\r\n' + smessage
  }

  var errors = req.validationErrors()

  if (errors) {
    res.send({ errorMsg: errors })
  } else {
      transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({ msg: 'Error occurred. Message not sent.', err: true })
        console.log(`static.js line 56: JSON.stringify(${error})`)
      } else {
        res.send({ msg: 'Message sent! Thank you.', err: false })
        console.log('Message %s sent %s', info.messageId, info.response)
      }
    })
  }
}
