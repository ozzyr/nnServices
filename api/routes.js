const express = require('express')
const router = express.Router()
const fs = require('fs')
const root = "./api/modules"
const error = require('./error')
const sendError = require('./send-error')
const indexJs = fs.readdirSync(root)
indexJs.forEach(async dir => {
    const fn = require('./modules/' + dir)
    if (typeof fn === 'function') {
        try {
            await fn(router)
        } catch (e) {
            router.all("*", (req, res) => {
                error.httpStatus = 500
                error.message = 'Internal error!'
                sendError(error, res)
                sendError(e)
            })
        }
    }
})
module.exports = router

router.stack.forEach(r => {
    if (r.route) {
        console.log(r.route.path, r.route.stack[0].method)
    }
})