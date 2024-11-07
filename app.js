import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { testCliente } from "./backend/Controllers/Clientes.controller.js";
import { testEmpleado } from "./backend/Controllers/Empleados.controller.js";
import { testProducto } from "./backend/Controllers/Producto.controller.js";

dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("Conexion a la base funcionando");
})
.catch((error)=>{
    console.log("Error en la conexion de la base");
})

const app = express();

app.use(cors());
app.listen(4000, ()=>{
    console.log("Escuchando correctamente el servidor");
})

testCliente();
testEmpleado();
testProducto();