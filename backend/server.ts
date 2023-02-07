import * as express from "express"
import { PORT } from "./utils/config";
import ProjectRoutes from './routes/projectRoutes'
import { errorMiddleware } from "./middleware/errorMiddleware";


const app = express();
app.use(express.json())

app.use('/api/project', ProjectRoutes)
app.use(errorMiddleware)

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`))