//let express = require('express')//chamando o express
//let routes = express.Router(); //chamado o recurso de rotas
module.exports = app => {

app.get( '/', (req, res)=>{

    res.statusCode = 200;//resposta de status padrao quando a solicitacao de página dá certo
    res.setHeader('Content-Type', 'text/html')//estou definindo o que irei mudar e que ele é html
    res.end('<h1>Olá, Mundo</h1>')//passando um html como resposta
})
//module.exports = routes//definindo que irei exportar ele
}