var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
    res.locals.title = 'Hey'
    res.locals.message = 'Hello there!'

    res.render('index')
})


module.exports = router