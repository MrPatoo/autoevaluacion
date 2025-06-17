import express from "express"
import cors from "cors"
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import tasksRoutes from "./src/routes/tasks.js"

const app = express()

//cors
app.use(cors
    ({origin: "*",
        credentials: true,
    })
);

//Traemos el archivo json
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./doc.json"), "utf-8")
);
 
//Mostramos el archivo al ingresar a /api/docs
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.use(express.json());

app.use("/api/tasks", tasksRoutes);

export default app;