
exports.up = function(knex) {
    return knex.schema.createTable('caisse', function (table) {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.decimal('solde').notNullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('caisse');
};
