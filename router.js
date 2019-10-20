const {Router} = require('express')
const router = new Router()
const {Movie} = require('./sequelize-rest')

// Create a movie resource
router.post('/movies', (req, res, next) => {
    Movie.create(req.body)
    .then(movie => res.status(200).json(movie))
    .catch(next)
})

// read all_ movies (the collections resource)
router.get('/movies', (req, res, next) => {
    Movie.findAll()
    .then(movies => {
        res.send(movies)
    })
    .catch(next)
})





















module.exports = router