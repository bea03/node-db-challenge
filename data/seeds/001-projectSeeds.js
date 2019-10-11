exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "HTML BASICS", description: "This is a description1" },
        { name: "CSS with LESS", description: "This is a description2" },
        { name: "Javascript", description: "This is a description3" },
        { name: "REACT", description: "This is a description4" },
        { name: "NodeJS", description: "This is a description5" }
      ]);
    });
};
