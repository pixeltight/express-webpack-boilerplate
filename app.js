require('dotenv').config()

const express = require('express')
const path = require('path')
const app = express()

// views
const handlebars = require('express-handlebars')

app.set('views', path.join(__dirname, 'app_server', 'views'))
console.log(path.join(__dirname, 'app_server', 'views'))
app.engine('.hbs',
  handlebars({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: 'app_server/views/layouts'
  })
)
app.set('view engine', '.hbs')

app.use(express.static(path.join(__dirname, '/public')))

// routes
const routes = require('./app_server/routes/index')
const about = require('./app_server/routes/about')

app.use('/', routes)
app.use('/about', about)

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
