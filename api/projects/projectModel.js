const db = require("../../data/dbConfig.js");

module.exports = {
    addTo,
    getThose,
    getThisByID
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

function getThose() {
  return db("projects")
    .then(data => {
      const updatedBoolArray = data.map(project => {
        if (project.complete) {
          const updatedBool = {
            ...project,
            complete: true
          };
          return updatedBool;
        } else {
          const updatedBool = {
            ...project,
            complete: false
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

function getThisByID(id) {
    return db('projects')
    .where('id', id)
    .first();
}