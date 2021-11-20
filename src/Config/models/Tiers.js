'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Tiers'
const tableName = 'tiers'

const selectableProps = [
    'id',
    'firstName',
    'lastName',
    'credits',
    'type',
    'n_tel',
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
