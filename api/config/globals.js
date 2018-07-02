const knex = require('./database')
const sha256 = require('js-sha256').sha256;
const params = require('./params')
global.knex = knex
global.sha256 = sha256
global.session = params.session