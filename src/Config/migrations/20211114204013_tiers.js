exports.up = function (knex) {
    return knex.schema.createTable('tiers', function (table) {
        table.increments('id').primary();
        table.string('firstName').notNullable().unique(); 
        table.string('lastName').notNullable().unique();
        table.integer('credits').nullable(); 
        table.integer('type').nullable(); //1 customer 2 client 3  employee
        table.integer('n_tel').nullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tiers');
};
