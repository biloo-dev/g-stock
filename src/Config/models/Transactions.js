'use strict'

const createGuts = require('../Helpers/model-guts')

const name = 'Transactions'
const tableName = 'transactions'

const selectableProps = [   
    'id',
    'type_trans',
    'tier_id',
    'effet_id',
    'caisse_id',
    'somme',
    'rest',
    'created_at',
    'updated_at',
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
