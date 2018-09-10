// a require('dotenv').config()

const express = require('express')
const exhbs = require('express-handlebars')
const path = require('path')

const app = express()
// views
app.set('views', path.join(__dirname, 'app_server', 'views'))

const hbs = exhbs.create({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: 'app_server/views/layouts'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// set static file directory
app.use(express.static(path.join(__dirname, '/public')))

// routes
const routes = require('./app_server/routes/index')

app.use('/', routes)

// custom 404
app.use((req, res, next) => {
  res.status(404)
  res.render('404')
})

// custom 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500)
  res.render('500')
})

// server
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
