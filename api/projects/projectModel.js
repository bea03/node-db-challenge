const db = require("../../data/dbConfig.js");

module.exports = {
    addTo,
    getThose
};

function addTo(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return id;
    })
    .catch(err => {
      return err;
    });
}

function getThose(projects) {
  return db("projects")
    .then(data => {
      const updatedBoolArray = data.map(project => {
        if (project.completed) {
          const updatedBool = {
            ...project,
            completed: true
          };
          return updatedBool;
        } else {
          const updatedBool = {
            ...project,
            completed: false
          };
          return updatedBool;
        }
      });
      return updatedBoolArray;
    })
    .catch(err => {
      return err;
    });
}
