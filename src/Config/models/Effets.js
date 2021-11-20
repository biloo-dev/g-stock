'use strict'

const createGuts = require('../helpers/model-guts')

const name = 'Effets'
const tableName = 'effets'

const selectableProps = [ 
    'id',
    'num',
    'tier_id',
    'action',
    'type',
    'total',
    'reste',
    'rebate_p',
    'rebate_d',
    'regler',
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
