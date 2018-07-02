const modules = async (app)=>{
    app.get('/modules', require('./get'))
}

module.exports = modules