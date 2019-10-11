const express = require('express');
const projectModel = require('./projectModel.js');
const router = express.Router();
// /api/projects
router.post('/', (req, res) => {
    projectModel.addTo(req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({ error: "server could not add project"});
    });
});

router.get('/', (req, res) => {
    projectModel.getThose()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "server could not get projects" })
    });
});

module.exports = router; 