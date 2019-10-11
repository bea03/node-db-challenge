const db = require('../../data/dbConfig.js');

module.exports = {
    addTo,
    getThose
};

function addTo(task) {
  return db("tasks")
    .insert(task)
    .then(id => {
      return id;
    })
    .catch(err => {
      return err;
    });
}

function getThose() {
  return db("tasks")
    .then(data => {
      const updatedBoolArray = data.map(task => {
        if (task.complete) {
          const updatedBool = {
            ...task,
            complete: true
          };
          return updatedBool;
        } else {
          const updatedBool = {
            ...task,
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
