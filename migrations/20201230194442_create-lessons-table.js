exports.up = function(knex) {
    return knex.schema.createTable('lessons', tbl => {
        tbl.increments()
        tbl.text('name')
        tbl.timestamps(true, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('lessons');
};
