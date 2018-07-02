const params = require('./params')
const knex = require('knex')(params.igvBank)
module.exports = knex