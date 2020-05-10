import { Project } from "./models/Project";

interface Database {
  projects: Project[];
}

const database: Database = {
  projects: [],
};

export const readProjects = () => {
  return database.projects;
};

export const readProject = (id: number) => {
  return database.projects.find(project => project.id === id);
};

export const createProject = (project: Project) => {
  database.projects.push(project);
};

export const updateProject = (project: Project) => {
  const index = database.projects.findIndex(p => p.id === project.id);

  database.projects[index] = project;
};

export const deleteProject = (id: number) => {
  database.projects = database.projects.filter(p => p.id !== id);
};
