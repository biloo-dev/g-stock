'use strict'

const createGuts = require('../Helpers/model-guts')

const name = 'Det_effet'
const tableName = 'det_effet'

const selectableProps = [  
    'id',
    'prod_id',
    'effet_id',
    'qty',
    'price',
    'rebate',
    'total',
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
