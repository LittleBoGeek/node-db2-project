const knex = require('knex')
 
const knexConfig = require('..knexfile.js')

const configuredKnex = knex(knexCongif.development);

module.exports = configuredKnex