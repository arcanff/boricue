"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _promise = require("mysql2/promise");
// Importa la función createPool del paquete "mysql2/promise"

// Crea una conexión a la base de datos utilizando createPool y obteniendo las variables de entorno
var pool = (0, _promise.createPool)({
  user: process.env.DB_USER,
  // Nombre de usuario de la base de datos 
  password: process.env.DB_PASSWORD,
  // Contraseña de la base de datos
  host: process.env.DB_HOST,
  // Dirección del host de la base de datos
  port: process.env.DB_PORT,
  // Puerto de la base de datos 
  database: process.env.DB_NAME // Nombre de la base de datos 
});
exports.pool = pool;