import { Request, Response } from "express"

//@desc Get all projects
//@route GET /api/projects
//@access Public
export const getAllProjects =(req:Request, res:Response)=>{
    res.json({message:"get all projects"})
}

//@desc Create projects
//@route Post /api/projects
//@access Private
export const createProjects =(req:Request, res:Response)=>{
    if(!req.body.title){
        res.status(400)
        throw new Error ('Title is required')
    }
    res.json({message:"create projects"})
}


//@desc Get  projects
//@route GET /api/projects/:id
//@access Public
export const getProjects =(req:Request, res:Response)=>{
    res.json({message:"get single projects"})
}


//@desc Update projects
//@route Put /api/projects/:id
//@access Private
export const updateProject =(req:Request, res:Response)=>{
    res.json({message:"update projects"})
}


//@desc Delete projects
//@route Delete /api/projects
//@access Private
export const deleteProject =(req:Request, res:Response)=>{
    res.json({message:"create projects"})
}

