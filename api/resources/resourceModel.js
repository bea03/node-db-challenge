const db = require("../../data/dbConfig.js");

module.exports = {
  addTo,
  getThose
};

function addTo(resource) {
  return db("resources")
    .insert(resource)
    .then(id => {
      return id;
    })
    .catch(err => {
      return err;
    });
}

function getThose() {
  return db("resources")
}
