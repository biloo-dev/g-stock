
exports.up = function(knex) {
    return knex.schema.createTable('effets',function(table){
        table.increments('id').primary();
        table.integer('num').notNullable().unique();
        table.integer('tier_id').nullable().unsigned().references('id').inTable('tiers').onDelete('set null')
        table.integer('action').nullable() // 1 achat 2 vents 
        table.integer('type').nullable() // 1 bl 2 br 
        table.decimal('total').notNullable() 
        table.decimal('reste').notNullable() 
        table.integer('rebate_p').notNullable()
        table.decimal('rebate_d').notNullable()
        table.boolean('regler').defaultTo(false)
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) { 
    return knex.schema.dropTableIfExists('effets');
};
