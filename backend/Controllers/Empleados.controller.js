import { modeloEmpleado } from "../Models/Empleados.model.js";

modeloEmpleado.create({
    Nombre:"Luis",
    Apepat:"Ruelas",
    Edad:21,
    Correo:"luis@example.com"

})

export const testEmpleado = ()=>{console.log("Funciona el controllador de empleados");
}