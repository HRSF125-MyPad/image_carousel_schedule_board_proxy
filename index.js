const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.use(express.json());
app.use(express.static(__dirname + '/public/'))

app.get('/image', (req, res) => {
    axios.get(`http://localhost:3002${req.url}`)
      .then((response) => {
        // console.log(response.data)
        res.send(response.data)
      })
      .catch((error) => {
       res.send(error)
      })
})

app.get('/homes', (req, res) => {
    axios.get(`http://localhost:3001/homes`)
    .then((response) => {
        // console.log(response.data)
        res.send(response.data)
    })
    .catch((error) => {
        res.send(error)
    })
})

app.get('/bank', (req, res) => {
    axios.get('http://localhost:3001/bank')
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        res.send(error)
    })
})

app.get('/images', (req, res) => {
    axios.get('http://localhost:3004/images')
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
