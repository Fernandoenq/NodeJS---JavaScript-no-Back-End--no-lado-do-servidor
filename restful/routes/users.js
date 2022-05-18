//let express = require('express')//chamando o express
//let routes = express.Router(); //chamado o recurso de rotas
let NeDB = require('nedb')//chamo o banco de dados nedb
let db = new NeDB({//criando o banco de dados
    filename:'users.db',
    autoload: true

})
module.exports = app => {

    let route = app.route('/users')
    
    route.get((req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                app.utils.error.send(err, req, res)
            }else{
                res.statusCode = 200;//resposta de status padrao quando a solicitacao de página dá certo
                res.setHeader('Content-Type', 'application/json')
                res.json({
                    users
                })//passando json como resposta
            }
        })//ordenar por onder acendente

        
    })

    route.post((req, res)=>{
        //res.json(req.body)

        if(!app.utils.validator.user(app, req, res))return false
        db.insert(req.body, (err, user)=>{//vou receber um Json no banco e caso de erro mostre
            if(err){
                app.utils.error.send(err, req, res)
            }else{
                res.status(200).json(user)
            }
        })
    })

//module.exports = routes//definindo que irei exportar ele

let routeId = app.route('/users/:id')//criando linnk que recebera a chave primaria para retornar o elemento

routeId.get((req, res) =>{
    db.findOne({_id:req.params.id}).exec((err, user)=>{
        if(err){
            app.utils.error.send(err, req, res)
        }else{
            res.status(200).json(user)
        }
    })
})

routeId.put((req, res) =>{
    if(!app.utils.validator.user(app, req, res))return false

    db.update({_id: req.params.id}, req.body, err=>{
        if(err){
            app.utils.error.send(err, req, res)
        }else{
            res.status(200).json(Object.assign( req.body,  req.params,))
        }
    })
})

routeId.delete((req, res) =>{
    db.remove({_id: req.params.id}, {}, err=>{
        if(err){
            app.utils.error.send(err, req, res)
        }else{
            res.status(200).json(req.params)
        }
    })
})

}