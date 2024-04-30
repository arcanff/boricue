// Importa el módulo Router de Express
import { Router } from "express";
// Importa todas las funciones controladoras desde el archivo "../controllers/products.controller"
import * as controller from "../controllers/users.controller";

// Crea una instancia de Router
const router = Router();

// Ruta para crear un nuevo usuario
router.post('/user', controller.createUser);

// Ruta para obtener un usuario específico por su ID
router.get('/user/:idusuario', controller.findOneUser);

// Ruta para realizar un ping de prueba en la base de datos
router.get('/uping', controller.pingUser);

// Ruta para obtener todos los usuarios
router.get('/user', controller.findAllUsers);

// Ruta para actualizar un usuario específico por su ID
router.put('/user/:idusuario', controller.updateUser);

// Ruta para eliminar un usuario específico por su ID
router.delete('/user/:idusuario', controller.deleteUser);

// Exporta el enrutador como el valor predeterminado del módulo
export default router;
