exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "This is a description",
          notes: "This is a note"
        },
        {
          project_id: 1,
          description: "This is a description2",
          notes: "This is a note"
        },
        {
          project_id: 1,
          description: "This is a description3",
          notes: "This is a note"
        },
        {
          project_id: 2,
          description: "This is a description4",
          notes: "This is a note"
        },
        {
          project_id: 2,
          description: "This is a description5",
          notes: "This is a note"
        },
        {
          project_id: 3,
          description: "This is a description6",
          notes: "This is a note"
        },
        {
          project_id: 3,
          description: "This is a description7",
          notes: "This is a note"
        },
        {
          project_id: 3,
          description: "This is a description8",
          notes: "This is a note"
        },
        {
          project_id: 4,
          description: "This is a description9",
          notes: "This is a note"
        },
        {
          project_id: 4,
          description: "This is a description10",
          notes: "This is a note"
        },
        {
          project_id: 5,
          description: "This is a description11",
          notes: "This is a note"
        },
        {
          project_id: 5,
          description: "This is a description12",
          notes: "This is a note"
        }
      ]);
    });
};
