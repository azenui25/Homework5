const express = require('express')
const sequelize = require('./sequelize-rest')
const Router = require('./router')
const bodyParser = require('body-parser')
const port =  5000
const app = express()

app.use(bodyParser.json())
app.use(Router)

app.listen(port, () => console.log(`APP is Listening on ${port}`))