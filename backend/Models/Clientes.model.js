import {Schema, model} from "mongoose";

export const EsquemaGeneral = new Schema({
    Nombre:{
        type:String
    },
    Apepat:{
        type:String
    },
    Edad:{
        type:String
    },
    Correo:{
        type:String
    }
})

export const modeloCliente = new model("Tabla de clientes", EsquemaGeneral)

