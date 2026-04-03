import express, { Request, Response } from "express";
import cors from "cors";
import projectRoutes from './app/modules/project/project.route';


const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use("/api/projects", projectRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("My Portfolio API is running..")
})

export default app;