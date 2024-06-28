import express from "express";
 import {
   CreateUser,
   GetUser,
   UpdateUser,
   DeleteUser,
 } from "../Controller/userController.js";

const routers = express.Router()

routers.post('/create', CreateUser)
routers.get('/get', GetUser)
routers.put('/update/:id', UpdateUser)
routers.delete("/delete/:id", DeleteUser);



export default routers