import express from "express"
import cors from "cors"
import tasksRoutes from "./src/routes/tasks.js"

const app = express()

//cors
app.use(cors
    ({origin: "*",
        credentials: true,
    })
)

app.use(express.json());

app.use("/api/tasks", tasksRoutes);

export default app;