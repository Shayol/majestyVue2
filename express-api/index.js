const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var movies = require('./movies')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/api/movies', (req, res) => res.json(movies.list))
app.post('/api/movies', movies.create)
app.patch('/api/movies/:id', movies.update)
app.delete('/api/movies/:id', movies.delete)

app.listen(3000, () => console.log('Example app listening on port 3000!'))