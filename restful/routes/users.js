//let express = require('express')//chamando o express
//let routes = express.Router(); //chamado o recurso de rotas
let NeDB = require('nedb')//chamo o banco de dados nedb
let db = new NeDB({//criando o banco de dados
    filename:'users.db',
    autoload: true

})
module.exports = app => {
    
    app.get( '/users', (req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                console.log(`error: ${err}`)
                res.status(400).json({
                    error: err
                })
            }else{
                res.statusCode = 200;//resposta de status padrao quando a solicitacao de página dá certo
                res.setHeader('Content-Type', 'application/json')
                res.json({
                    users
                })//passando json como resposta
            }
        })//ordenar por onder acendente

        
    })

    app.post( '/users', (req, res)=>{
        //res.json(req.body)

        db.insert(req.body, (err, user)=>{//vou receber um Json no banco e caso de erro mostre
            if(err){
                console.log(`error: ${err}`)
                res.status(400).json({
                    error: err
                })
            }else{
                res.status(200).json(user)
            }
        })
    })

//module.exports = routes//definindo que irei exportar ele


}