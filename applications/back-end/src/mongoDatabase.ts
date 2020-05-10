import { Project } from "./models/Project";
import { MongoClient } from "mongodb";

let dbClient: MongoClient;

export const connectDatabase = (connectionString: string) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(connectionString, (err, client) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      dbClient = client;

      resolve(client);

      console.log("Connected to Database");
    });
  });
};

export const readProjects = async () => {
  const projectsCollection = dbClient
    .db("online-ddd")
    .collection<Project>("projects");

  return await projectsCollection.find().toArray();
};

export const readProject = async (id: number) => {
  const projectsCollection = dbClient
    .db("online-ddd")
    .collection<Project>("projects");

  return await projectsCollection.findOne({ id });
};

export const createProject = async (project: Project) => {
  const projectsCollection = dbClient
    .db("online-ddd")
    .collection<Project>("projects");

  return await projectsCollection.insertOne(project);
};

export const updateProject = async (project: Project) => {
  const projectsCollection = dbClient
    .db("online-ddd")
    .collection<Project>("projects");

  return await projectsCollection.findOneAndUpdate({ id: project.id }, project);
};

export const deleteProject = async (id: number) => {
  const projectsCollection = dbClient
    .db("online-ddd")
    .collection<Project>("projects");

  return await projectsCollection.deleteOne({ id });
};
