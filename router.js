const {Router} = require('express')
const router = new Router()
const {Movie} = require('./sequelize-rest')

// Create a movie resource
router.post('/movies', (req, res, next) => {
    console.log("WHAT IS REQ.BODY", req.body)
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
 
// Read a single movie
router.get('/movies: id', (req, res, next) => {
    Movie.findByPk(req.params.id)
    .then(movie =>{
        res.send(team)
    })
    .catch(next)
})

//_update_ a single movie resource
router.put('/movies/:id', (req, res, next) =>{
    console.log(req.params, 'WRECKED BY PARAMS??')
    Movie.findByPk(req.params.id)
    .then(movie => {
        console.log('MOvie found?', movie)
        if (movie){
            movie
            .update(req.body)
            .then(movie => res.status(200).json(movie))
        } else {
            res.status(404).end()
        }
    })
})

//delete_ a single movie resource
router.delete('/movies/: id', (req, res, next) =>{
    Movie.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(numDeleted => {
        if(numDeleted){
            res.status(204).end()
        } else {
            res.status(404).end()
        }

    })
    .catch(next)
})
















module.exports = router