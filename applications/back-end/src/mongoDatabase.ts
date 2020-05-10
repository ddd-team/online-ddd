import { Project } from "./models/Project";
import { MongoClient, ObjectId } from "mongodb";

let client: MongoClient;

export const connectDatabase = async (connectionString: string) => {
  client = await MongoClient.connect(connectionString);

  console.log("Connected to Database");
};

export const readProjects = async () => {
  const projectsCollection = client.db("online-ddd").collection("projects");

  return await (await projectsCollection.find().toArray()).map(toEntity);
};

export const readProject = async (id: string) => {
  const projectsCollection = client.db("online-ddd").collection("projects");

  return toEntity(await projectsCollection.findOne(new ObjectId(id)));
};

export const createProject = async (project: Project) => {
  const projectsCollection = client.db("online-ddd").collection("projects");

  const result = await projectsCollection.insertOne(project);

  return result.insertedId;
};

export const updateProject = async ({ id, ...project }: Project) => {
  const projectsCollection = client.db("online-ddd").collection("projects");

  const result = await projectsCollection.findOneAndUpdate(
    new ObjectId(id),
    project
  );

  return result.value;
};

export const deleteProject = async (id: string) => {
  const projectsCollection = client.db("online-ddd").collection("projects");

  return await projectsCollection.deleteOne({ _id: new ObjectId(id) });
};

const toEntity = ({ _id, ...item }: any) => {
  //Renames _id in database to id in Entity
  return {
    id: _id,
    ...item,
  };
};
