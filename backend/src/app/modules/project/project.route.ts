import express from "express";
import { ProjectController } from "./project.controller";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), ProjectController.createProject);
router.get("/", ProjectController.getAllProjects);
router.get("/featured", ProjectController.getFeatured);
router.get("/:id", ProjectController.getProjectById);
router.patch("/:id", ProjectController.updateProject);
router.delete("/:id", upload.single("image"), ProjectController.deleteProject);

export default router;
