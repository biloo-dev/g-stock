
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.string('img').nullable()
        table.string('description').nullable()
        table.decimal('price').notNullable()
        table.integer('unit_measur').notNullable()
        table.integer('qty_init').defaultTo(0)
        table.integer('qty_real').defaultTo(0)
        table.boolean('blocked').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');

};
