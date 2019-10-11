const express = require('express');
const taskModel = require('./taskModel.js');
const router = express.Router();

router.post('/', (req, res) => {
    taskModel.addTo(req.body)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => {
        res.status(500).json({ error: "server could not add task"});
    });
});

router.get('/', (req, res) => {
    taskModel.getThose()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "server could not get tasks" })
    });
});

module.exports = router; 