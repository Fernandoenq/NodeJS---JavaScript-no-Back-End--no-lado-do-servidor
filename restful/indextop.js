//const http = require('http')//carregando o modulo http
const express = require('express')//O express chama o http automaticamente
const consign = require('consign')//chamando o consign para a brincadeira
const bodyParser = require('body-parser')
const expressValidator = require('express-validator');
//let routesIndex =  require('./routes/index.js')//importando o index.js da pasta routes
//let routesusers =  require('./routes/users.js')//importando o users.js da pasta routes


let app = express();

app.use(bodyParser.urlencoded({extended: false}))//colocar pois dependendo da codificação que vier vai entender
app.use(bodyParser.json())//tudo que recceber converta em json
app.use(expressValidator());

consign().include('routes').include('utils').into(app)

consign().include('routes').into(app)
//app.use(routesIndex)
//app.use('/users',routesusers)

//let server = http.createServer((req, res)=>{//guarda o servidor e recebe a url e mo metodo





app.listen(3000, '127.0.0.1', ()=>{//porta 3000 vai over, com o iplocal
    console.log("Servidor rodando")
})

