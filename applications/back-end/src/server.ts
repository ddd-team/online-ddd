import express from "express";
import { initGraphQL } from "./graphql";
import bodyParser from "body-parser";
import {
  createProject,
  readProjects,
  readProject,
  updateProject,
  deleteProject,
} from "./database";

let id = 1;

const app = express();

initGraphQL(app);

app.use(bodyParser.json());

app.post("/projects", (req, res) => {
  console.log(req.body);
  const { name } = req.body.project;

  const project = { name, id: id++ };

  createProject(project);

  res.send({ project });
});

app.get("/projects", (req, res) => {
  const projects = readProjects();

  res.send({ projects });
});

app.get("/projects/:id", (req, res) => {
  const project = readProject(+req.params.id);

  res.send({ project });
});

app.put("/projects/:id", (req, res) => {
  const id = +req.params.id;
  const { name } = req.body.project;
  const project = { name, id };

  updateProject(project);

  res.send({ project });
});

app.delete("/projects/:id", (req, res) => {
  const id = +req.params.id;

  deleteProject(id);

  res.status(204).send();
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
