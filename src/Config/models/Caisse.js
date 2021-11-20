'use strict'

const createGuts = require('../Helpers/model-guts')

const name = 'Caisse'
const tableName = 'caisse'

const selectableProps = [  
    'id',
    'name',
    'solde',
    'created_at',
    'updated_at' 
]

module.exports = knex => {
    const guts = createGuts({
        knex,
        name,
        tableName,
        selectableProps
    })

    return {
        ...guts
    }
}
