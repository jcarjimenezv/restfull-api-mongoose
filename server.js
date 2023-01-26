// Imports
const express = require('express')
require('dotenv').config()
const connection = require('./app/config/connection')

// Routes
const students = require('./app/router/students')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/app/v1', students)

connection().then(()=> console.log('Connected')).catch(()=> console.log('An error occurred trying to connect to mongo') )

const server = app.listen(4000, ()=> {
    console.log('Server listen on port ', server.address().port )
})

server.on('error', (err)=> {
    console.log('An error occurred in server, ', err.message)
})