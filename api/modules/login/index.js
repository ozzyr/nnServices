
const login = async (app)=>{
    app.post('/login', require('./post'))
}

module.exports = login