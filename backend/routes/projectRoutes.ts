import * as express from "express";
import {
  getProjectsHandler,
  getAllProjectsHandler,
  createProjectsHandler,
  updateProjectHandler,
  deleteProjectHandler,
} from "../controllers/projectController";

const route = express.Router();

route
    .route("/")
    .get(getAllProjectsHandler)
    .post(createProjectsHandler);
    
route
  .route("/:id")
  .get(getProjectsHandler)
  .put(updateProjectHandler)
  .delete(deleteProjectHandler);

export default route;
