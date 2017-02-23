const express = require('express')  
const app = express()  
const port = process.env.PORT || 1337

app.get('/', (request, response) => {  
  response.send('Hello from Express!')
})

app.post('/', (request, response) => {  
  response.send('Hello from Express post!')
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})