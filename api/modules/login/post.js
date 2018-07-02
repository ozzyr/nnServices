const error = require('../../error')
const sendError = require('../../send-error')
const model = require('./model')
const geraToken = require('./gera-token')
const get = async (req, res)=>{
    try {
        //res.cookie('token', data, { maxAge: 1200000 })
        const email = req.body.user
        const senha = sha256(req.body.password)
        const data = await model.post({email})
        if(!data.length)throw {stack: 'Usuário ou senha inválidos', status: 401, type: 1}
        if(data[0].senha != senha) throw {stack: 'Usuário ou senha inválidos', status: 401, type: 1}
        const token = await geraToken(data[0].id)
        res.cookie('token', token, {maxAge: (session * 60) * 1000})
        res.json({status: true, message: 'Success', token})
    } catch (err) {
        if(!err.type){
            sendError(err)
            error.httpStatus = 500
            error.message = 'Internal Error'
           return sendError(error, res)
        }
        error.httpStatus = err.status
        error.message = err.stack
        sendError(error, res)        
    }
}

module.exports = get