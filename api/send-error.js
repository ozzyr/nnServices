'use strict'
/**send error */
const sendError = (err, res=null) => {
    console.log(err)
    if(!res){
        return false
    }
    res.status(err.httpStatus).json(err)
}

module.exports = sendError