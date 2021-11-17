
exports.up = function (knex) {
    return knex.schema.createTable('det_effet', function (table) {
        table.increments('id').primary(); 
        table.integer('prod_id').nullable().unsigned().references('id').inTable('products').onDelete('set null')
        table.integer('effet_id').nullable().unsigned().references('id').inTable('effets').onDelete('set null')
        table.integer('qty').notNullable() 
        table.decimal('price').notNullable()
        table.decimal('rebate').nullable()
        table.decimal('total').nullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('det_effet');
};
