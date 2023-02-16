import { ProjectType } from "../types/projectTypes";
import HttpException from "../utils/httpsException";


export function sanitizeProject(project: ProjectType): ProjectType {
    let sanitizedProject = <ProjectType>{};
    sanitizedProject.title= sanitizeTitle(project.title);
    return sanitizedProject;
}


function sanitizeTitle(title:string): string{

    //types
    if(title=== undefined){
        throw new HttpException('Title is undefined', 400)
    }
    if(typeof(title) !== 'string'){
        throw new HttpException('Title is not a string', 400)
    }
    //attributes

    title = title.trim();

    if(title.length < 3){
        throw new HttpException('Title must be atleast 2 characters', 400)
    }
    
    if(title.length > 50){
        throw new HttpException('Title must be less than 50 characters', 400)
    }
    return title;
}