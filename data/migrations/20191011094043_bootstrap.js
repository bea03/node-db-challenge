exports.up = function(knex) {
  return knex.schema
    .createTable("resources", tbl => {
      tbl.increments("id");
      tbl
        .string("name", 128)
        .unique()
        .notNullable();
      tbl.string("notes", 255);
    })
    .createTable("projects", tbl => {
      tbl.increments("id");
      tbl.string("name", 128).notNullable();
      tbl.text("description", 712);
      tbl.boolean("complete").defaultTo(false);
    })
    .createTable("project_resources", tbl => {
      tbl.increments("id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl.unique(["project_id", "resource_id"]); //unique index so that only one resource can apply to a project
    })
    .createTable("tasks", tbl => {
      tbl.increments("id");
      tbl
        .string("name", 128)
        .unique()
        .notNullable();
      tbl.string("notes", 255);
      tbl.boolean("complete").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources");
};
