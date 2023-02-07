import { Request, Response } from "express"
import * as asyncHandler from 'express-async-handler'
import mongoose from "mongoose";
import { checkisValidObjectId } from "../database/db";
import { createProject, deltedProject, getProjectById, getProjects, updateProject } from "../services/projectService";

//@desc Get all projects
//@route GET /api/projects
//@access Public
export const getAllProjectsHandler = asyncHandler(async (req:Request, res:Response)=>{
    const project = await getProjects();
    res.status(200).json(project)
})

//@desc Create projects
//@route Post /api/projects
//@access Private
export const createProjectsHandler = asyncHandler(async (req:Request, res:Response)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error ('Title is required')
    }

    await createProject(req.body)
    res.status(201).json({message:'Project created'})

})


//@desc Get  projects
//@route GET /api/projects/:id
//@access Public
export const getProjectsHandler = asyncHandler(async (req:Request, res:Response)=>{

    checkisValidObjectId(req.params.id)
    const project = await getProjectById(req.params.id);
    res.status(200).json(project)
})


//@desc Update projects
//@route Put /api/projects/:id
//@access Private
export const updateProjectHandler =asyncHandler(async ( req:Request, res:Response)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error ('Title is required')
    }
    checkisValidObjectId(req.params.id)
    const project = await updateProject(req.params.id, req.body)

    res.json({message:"update projects", project})
})


//@desc Delete projects
//@route Delete /api/projects
//@access Private
export const deleteProjectHandler =asyncHandler(async (req:Request, res:Response)=>{
    checkisValidObjectId(req.params.id)
    const project = await deltedProject(req.params.id)
    res.status(200).json({message: `Delete Project ${req.params.id}`, project})
})

