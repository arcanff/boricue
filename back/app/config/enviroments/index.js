// Importa el módulo 'path' de Node.js
import path from "path";
// Importa el paquete 'dotenv' para cargar las variables de entorno
import dotenv from "dotenv";

// Configura las variables de entorno utilizando el paquete 'dotenv'
dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});