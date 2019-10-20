const Sequelize = require('sequelize')
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:secret@localhost:5432/postgres'
const sequelize = new Sequelize(connectionString)




const Movie = sequelize.define('movie', {
    title : Sequelize.TEXT,
    yearOfRelease: Sequelize.INTEGER,
    synopsis: Sequelize.TEXT

})

sequelize.sync()
    .then(() => Movie.create({ title: 'Avengers Endgame', yearOfRelease: 2019, synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle.'}))
    .then(() => Movie.create({ title: 'John Wick 2', yearOfRelease: 2017, synopsis:'Retired super-assassin John Wick plans to resume a quiet civilian life are cut short' }))
    .then(() => Movie.create({ title: 'Kill', yearOfRelease: 2009, synopsis: 'they all died' }))
    .then(() => Movie.findAll())
    .then(movies => console.log("All movies: ", movies.map(m => m.dataValues)))
    .catch(err => console.error(err))







    module.exports = {sequelize, Movie}