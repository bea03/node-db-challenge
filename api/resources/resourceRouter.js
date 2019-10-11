const express = require("express");
const resourceModel = require("./resourceModel.js");
const router = express.Router();

router.post("/", (req, res) => {
  resourceModel
    .addTo(req.body)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: "server could not add resource" });
    });
});

router.get("/", (req, res) => {
  resourceModel
    .getThose()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "server could not get resources" });
    });
});

module.exports = router;
