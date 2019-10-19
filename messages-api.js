const express = require('express')
const bodyParser = require('body-parser')




const app = express()
const port = 3000
app.post('/messages', (req, res, next) => {
    console.log('text', req.body)
})
app.listen(port, () => console.log(`Messages api is listening on port ${port}!`))