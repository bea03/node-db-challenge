
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'rowValue1', description: 'This is a description1'},
        {name: 'rowValue2', description: 'This is a description2'},
        {name: 'rowValue3', description: 'This is a description3'},
        {name: 'rowValue4', description: 'This is a description4'},
        {name: 'rowValue5', description: 'This is a description5'}
      ]);
    });
};
