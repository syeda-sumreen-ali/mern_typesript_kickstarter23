import { Request, Response } from "express"
import * as asyncHandler from 'express-async-handler'
import mongoose from "mongoose";
import Project from "../models/projectModels"

//@desc Get all projects
//@route GET /api/projects
//@access Public
export const getAllProjects = asyncHandler(async (req:Request, res:Response)=>{
    const projects = await Project.find();
    res.json(projects)
})

//@desc Create projects
//@route Post /api/projects
//@access Private
export const createProjects = asyncHandler(async (req:Request, res:Response)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error ('Title is required')
    }

    const project= await Project.create(req.body);
    if(!project){
        res.status(400)
        throw new Error ('Project not created')
    }
    res.status(201).json({message:'Project created'})

})


//@desc Get  projects
//@route GET /api/projects/:id
//@access Public
export const getProjects = asyncHandler(async (req:Request, res:Response)=>{
    const project = await Project.findById(req.params.id)
    if(!project){
        res.status(404)
        throw new Error ('Project not found')
    }
    res.status(200).json(project)
})


//@desc Update projects
//@route Put /api/projects/:id
//@access Private
export const updateProject =asyncHandler(async ( req:Request, res:Response)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error ('Title is required')
    }
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`)
    }
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!project){
        res.status(404)
        throw new Error ('Project not found')
    }

    res.json({message:"update projects", project})
})


//@desc Delete projects
//@route Delete /api/projects
//@access Private
export const deleteProject =asyncHandler(async (req:Request, res:Response)=>{
    const project = await Project.findByIdAndDelete(req.params.id)
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(400);
        throw new Error(`${req.params.id} is not a valid id`)
    }
    if(!project){
        res.status(404)
        throw new Error ('Project not found')
    }
    res.status(200).json({message: `Delete Project ${req.params.id}`})
})

