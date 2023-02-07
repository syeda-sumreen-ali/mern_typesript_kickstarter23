import ProjectModel from '../models/projectModel'
import { IProjectSchema } from '../schema/projectSchema';
import { ProjectType } from '../types/projectTypes'

export async function getProjects(): Promise<ProjectType[]> {
    try {
        const projects = await ProjectModel.find();

        if (!projects) throw new Error('No projects found');

        return projects;

    } catch (error) {
        throw new Error('Project not found')
    }
}

export async function createProject(project:ProjectType):Promise<ProjectType>{
   try{
    const newProject = await ProjectModel.create(project);
    if(!newProject) throw new Error('Project not create');

    return newProject;
   }catch{
    throw new Error('Project not created');
   }
}

export async function getProjectById(projectId:string):Promise<IProjectSchema> {
    try {
        const project = await ProjectModel.findById(projectId)
        if(!project){
            throw new Error ('Project not found')
        }
        return project;
    } catch (error) {
        throw new Error ('Project not updated')
    }
}

export async function updateProject(projectId:string, project:ProjectType):Promise<IProjectSchema> {
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(projectId, project, {new:true})
        if(!updatedProject){
            throw new Error ('Project not found')
        }
        return updatedProject;
    } catch (error) {
        throw new Error ('Project not updated')
    }
}

export async function deltedProject(projectId:string):Promise<void> {
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(projectId)
        if(!deletedProject){
            throw new Error ('Project not found')
        }
        return;
    } catch (error) {
        throw new Error ('Project not deletec')
    }
}