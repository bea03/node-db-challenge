const db = require('../../data/dbConfig.js');

module.exports = {

}

function addTo(project) {
    return db('projects')
    .insert(project)
    .then(id => {
        return id
    });
}