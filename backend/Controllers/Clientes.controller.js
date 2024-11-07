import { modeloCliente } from "../Models/Clientes.model.js";

//Crear un registro

modeloCliente.create({
    Nombre: "Lalo",
    Apepat:"Lara",
    Edad:21,
    Correo:"ejemplo@example.com"
})

export const testCliente = ()=>{console.log("Funciona el controlador del cliente");}