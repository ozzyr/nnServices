
const moment = require('moment')
const model = require('./model')
const geraToken = async (id = Number)=>{
    const vencimento = moment().add(session, 'm').format('YYYY-MM-DD hh:mm:ss')
    const token = sha256(moment().format('x'))
    await model.geraToken({token, vencimento, usuarioId: id})
    return token
}

module.exports = geraToken