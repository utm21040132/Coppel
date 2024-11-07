import { EsquemaGeneral } from "./Clientes.model.js";
import {model} from "mongoose";

export const modeloEmpleado = new model("Tabla modelo", EsquemaGeneral);
