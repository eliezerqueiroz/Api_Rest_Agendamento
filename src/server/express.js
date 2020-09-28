const express = require('express')
const app = express()

const rotas = require('../app/controller/rotas') 

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json({
    extended: true
}))


rotas(app)

module.exports = app

