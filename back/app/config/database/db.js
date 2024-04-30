// Importa la función createPool del paquete "mysql2/promise"
import { createPool } from "mysql2/promise";

// Crea una conexión a la base de datos utilizando createPool y obteniendo las variables de entorno
export const pool = createPool({
    user: process.env.DB_USER,         // Nombre de usuario de la base de datos 
    password: process.env.DB_PASSWORD, // Contraseña de la base de datos
    host: process.env.DB_HOST,         // Dirección del host de la base de datos
    port: process.env.DB_PORT,         // Puerto de la base de datos 
    database: process.env.DB_NAME      // Nombre de la base de datos 
});

