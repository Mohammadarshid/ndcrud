import express from "express";
import dbCons from "./utils/db.js";
import dotenv from "dotenv";
import cors from 'cors';
import routers from "./Routes/routes.js";
dotenv.config()
const app = express();


// mongodb
dbCons()

app.use(express.json())
 app.use(cors())
app.use('/api', routers)


app.listen(process.env.PORT, () => {
console.log("Server is running");
});
