import * as express from "express"
import { PORT } from "./utils/config";
import ProjectRoutes from './routes/projectRoutes'
import { errorMiddleware } from "./middleware/errorMiddleware";
import { connectDB } from "./database/db";
import * as Colors from 'colors.ts'

Colors.colors('','')

connectDB()

const app = express();
app.use(express.json())

app.use('/api/project', ProjectRoutes)
app.use(errorMiddleware)

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))