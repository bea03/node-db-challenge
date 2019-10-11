const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectRouter = require("./projects/projectRouter.js");
const taskRouter = require("./tasks/taskRouter.js");
const resourceRouter = require("./resources/resourceRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);
server.use("/api/resources", resourceRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
