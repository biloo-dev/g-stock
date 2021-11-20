'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Products'
const tableName = 'products'

const selectableProps = [
    'id',
    'name',
    'img',
    'description',
    'price',
    'unit_measur',
    'qty_init',
    'qty_real',
    'blocked',
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
