import { IProject } from "./project.interface";
import ProjectModel from "./project.model";

const createProject = async (data: Partial<IProject>) => {
  const result = await ProjectModel.create(data);
  return result;
};

const getAllProjects = async (query: Record<string, unknown>) => {
  const result = await ProjectModel.find(query).sort({
    order: 1,
    createdAt: -1,
  });
  return result;
};

const getProjectById = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

const updateProject = async (id: string, data: Partial<IProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id);
  return result;
};

const getFeaturedProjects = async () => {
  const result = await ProjectModel.find({ featured: true })
    .sort({ order: 1 })
    .limit(3);
  return result;
};

export const ProjectService = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getFeaturedProjects,
};
