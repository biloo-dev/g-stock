
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {  name: 'biloo', email: 'biloo@gmail.fr', password: 'rowgValue3' },
        {  name: 'koko',  email: 'koko@gmail.fr', password: 'rowValgue3' },
        {  name: 'toto',  email: 'toto@gmail.fr', password: 'rowVadlgue3' },
      ]);
    });
};
