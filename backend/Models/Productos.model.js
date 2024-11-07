import {Schema,model} from "mongoose";

const EsquemaProducto = new Schema({
    Nombre:{
        type:String
    },
    Precio:{
        type:Number
    },
    Categoria:{
        type:String
    }
    
})

export const modeloProducto = new model("Tabla de Productos", EsquemaProducto);