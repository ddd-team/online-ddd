import express from "express";
import { initGraphQL } from "./graphql";
import bodyParser from "body-parser";
import {
  createProject,
  readProjects,
  readProject,
  updateProject,
  deleteProject,
  connectDatabase,
} from "./mongoDatabase";

export const startServer = async () => {
  let id = 1;

  const app = express();

  initGraphQL(app);

  const connectionString = process.env.mongodbConnectionString;

  await connectDatabase(connectionString);

  app.use(bodyParser.json());

  app.post("/projects", async (req, res) => {
    console.log(req.body);
    const { name } = req.body.project;

    const project = { name };

    await createProject(project);

    res.send({ project });
  });

  app.get("/projects", async (req, res) => {
    const projects = await readProjects();

    res.send({ projects });
  });

  app.get("/projects/:id", async (req, res) => {
    const project = await readProject(req.params.id);

    res.send({ project });
  });

  app.put("/projects/:id", async (req, res) => {
    const id = req.params.id;
    const { name } = req.body.project;
    const project = { name, id };

    await updateProject(project);

    res.send({ project });
  });

  app.delete("/projects/:id", async (req, res) => {
    const id = req.params.id;

    await deleteProject(id);

    res.status(204).send();
  });

  app.listen(4000, () => {
    console.log("Server listening on port 4000");
  });
};
