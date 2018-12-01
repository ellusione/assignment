'use strict'

const express = require('express')
const http = require('http')
const bodyParser = require('body-parser');

const app = express()
const server = new http.Server(app) 
server.listen(3000)

app.use(bodyParser.text());

app.post('/file', (req, res, next) => {
    console.log('Received', req.body)
   res.sendStatus(200)
})
