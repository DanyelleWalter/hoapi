var express = require('express')
let app = express()

// 流量准入控制中间件 Traffic control middleware
app.use(function (req, res, next) {
    console.log('Traffic control middleware')
    next()
})

// SFM 静态文件中间件 Static file middleware
app.use('/stylesheets', express.static('static/css'))
app.use('/javascripts', express.static('static/js'))
app.use('/images', express.static('static/img'))
app.use('/files', express.static('static/file'))

// SSM 会话中间件 Session middleware
app.use(require('./middlewares/session'))

// PPM POST请求参数中间件 POST parameter middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.text())
app.use(express.raw())

// PPM 文件上传中间件 File upload middleware
// app.use(express.multipart())

// TEM 模板引擎中间件 Template engine middleware
app.set('view engine', 'ejs')
app.set('views', 'app/views')

// RTM 路由中间件 Router middleware
app.use('/', require('./routes'))

// LTM 日志中间件 Log middleware
app.use(function (req, res, next) {
    console.log('Request Url: ' + req.url)
    next()
})

// MWM 自定义中间件 My middleware
app.use(function (req, res, next) {
    console.log('My middleware')
    next()
})

// EHM 错误处理中间件 Error handling middleware
app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!')
})
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

module.exports = app