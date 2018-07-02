//npm run build:watch
require('./api/config/globals')
const express = require('express')
const ws = require('ws')
const app = express()

app.disable('x-powered-by');
/**front end */
app.use(require('cookie-parser')())
app.use(express.static('public'));

/**back end */

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const server = require('http').createServer(app)

const wss = new ws.Server({server})
app.use(require('./api/routes'))
server.listen(9000, ()=>{
    console.log("servidor rodando na porta 9000")
})