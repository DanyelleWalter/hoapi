module.exports = function (req, res, next) {
    console.log('Session middleware')
    next()
}