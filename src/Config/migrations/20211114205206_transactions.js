
exports.up = function(knex) {
    return knex.schema.createTable('transactions',function(table){
      table.increments('id').primary();
      table.integer('type_trans').notNullable(); // 1 + ; 2 -
      table.integer('tier_id').nullable().unsigned().references('id').inTable('tiers').onDelete('set null')
      table.integer('effet_id').nullable().unsigned().references('id').inTable('effets').onDelete('set null')
      table.integer('caisse_id').nullable().unsigned().references('id').inTable('caisse').onDelete('set null')
      table.decimal('somme').notNullable()
      table.decimal('rest').defaultTo(0)
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('transactions');
};
