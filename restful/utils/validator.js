module.exports ={

    user:(app, req,res)=>{

        req.assert('name','nome é obrigatori0').not().notEmpty()//valida o campo
        req.assert('email','O email está inváilido').notEmpty().isEmail()//valida o campo

        let errors = req.validationErrors()
        if(errors){//se a variável existe ent tem erros na entrada de dados

            app.utils.error.send(errors, req, res)
            return false;//para a execução da página

        }else{
            return true
        }
    }
}