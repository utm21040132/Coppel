import { modeloProducto } from "../Models/Productos.model.js";

//Crear producto

modeloProducto.create({
    Nombre:"Celular chafilla",
    Precio:10000,
    Categoria:"Celulares"
})

export const testProducto = ()=>{console.log("Funciona el controlador de productos");
}