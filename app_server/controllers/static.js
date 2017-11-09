const nodemailer = require('nodemailer')
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

    let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: credentials.gmail.user,
      pass: credentials.gmail.password
    }
  })

  req.checkBody('user.name', 'Name is a required field').notEmpty()
  req.checkBody('user.email', 'Please enter a valid email address').isEmail()
  req.checkBody('user.message', 'Please enter a message').notEmpty()

  let suser = req.sanitizeBody('user.name').escape().trim();
  let semail = req.sanitizeBody('user.email').escape().trim();
  let smessage = req.sanitizeBody('user.message').escape().trim();

  let mailOptions = {
    from: req.body.user.email,
    to: 'jkerr013@gmail.com',
    subject: 'PixelTight Form Response',
    text: suser + '\r\n' + semail + '\r\n' + smessage
  }



  var errors = req.validationErrors()
  if(errors) {
    console.log(`Validation Errors: ${JSON.stringify(errors)}`)
  }

  if (errors) {
    res.send({ errorMsg: errors })
  } else {
      transporter.sendMail(mailOptions, (error, info) => {
      console.log('this eventuality')
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
