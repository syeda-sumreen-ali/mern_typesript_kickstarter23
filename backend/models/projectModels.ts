import { model, models, Schema, Model, Document } from 'mongoose';

interface IProject extends Document {
    title:string;
}

const projectSchema:Schema = new  Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        }
    },
)

const Project = models.Project ||  model('Project', projectSchema)
export default Project