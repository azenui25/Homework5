const express = require('express')
const bodyParser = require('body-parser')




const app = express()
const port = 3000

const maxMessages = 5
let numOfRequests = 0
const limitRequest = (req, res, next) => {
  numOfRequests +=
  console.log('num of req =', numOfRequests)
  if(numOfRequests > maxMessages)
   res.status(429).send({message: "Too Many Requests."})
  else next()
}



app.use(bodyParser.json())
app.post('/messages', limitRequest, (req, res, next) => {
    console.log('text:', req.body)
    if (req.body.text){
    res.status(200).json({ message: "Message received loud and clear"})
    } else{
        res.status(400).json({message: "Bad Request"})
    }
})
app.listen(port, () => console.log(`Messages api is listening on port ${port}!`))