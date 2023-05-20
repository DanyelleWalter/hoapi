var express = require('express')
var app = express()


//  body parser
app.set('view engine', 'ejs')
app.set('views', './views')

//  static file
app.use('/css',express.static('static/css'))
app.use('/js',express.static('static/js'))
app.use('/img',express.static('static/images'))

//  template engine
app.use('/', require('./route/index.js'))
app.use('/api', require('./route/api.js'))
app.use('/admin', require('./route/admin.js'))



app.get('/', function (req, res) {
    res.send('Hello World!')
})

module.exports = app