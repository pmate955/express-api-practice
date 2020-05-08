
exports.up = function (knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments();
    table.string('title');
    table.integer('woeid');
    table.string('locationType');
    table.string('lattLong');
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.timestamp('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('locations');
};
