import mongoose, { Schema } from "mongoose";
import { IProject } from "./project.interface";

const projectScehema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String },
    imagePublicId: { type: String },
    techStack: [{ type: String }],
    liveUrl: { type: String },
    githubUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }, 
  },
  {
    timestamps: true,
  },
);

const ProjectModel = mongoose.model<IProject>("Project", projectScehema);

export default ProjectModel;
