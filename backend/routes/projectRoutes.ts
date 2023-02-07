import * as express from "express"
import {getProjects, getAllProjects, createProjects, updateProject, deleteProject} from '../controllers/projectController'

const route = express.Router()

route.route("/").get(getAllProjects).post(createProjects)
route.route("/:id").get(getProjects).put(updateProject).delete(deleteProject)

export default route;