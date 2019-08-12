// Require Packages
const express = require('express')
const cors = require('cors')
const axios = require('axios')

// Require controlls
const ctrl = require('./controllers/crudOperations')
const swapiCtrl = require('./controllers/httpOperators')

// Create server instance
const app = express()

// Top level MIddleware to parse JSON to HS
app.use(express.json())
app.use(cors())

app.get('/users', ctrl.getUsers)
app.get('/user/:id', ctrl.getUserByParam)
app.post('/users', ctrl.createNewUser)
app.put('/users/:id', ctrl.updateUser)
app.delete('/users/:id', ctrl.deleteUser)

app.get('/swapi/users/:page', swapiCtrl.getSwapiCharacters)

app.listen(8080, () => {
    console.log('server running on port 8080')
})