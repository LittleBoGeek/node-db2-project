
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:23233, make: 'Chevy', model:'Impala', mileage:36000},
        {VIN:23238, make: 'Ford', model:'Explorer', mileage:100},
        {VIN:23234, make: 'Mitsubishi', model:'Montero', mileage:90000}
      ]);
    });
};

//deleting without a where clause does what truncate does, deleting everything