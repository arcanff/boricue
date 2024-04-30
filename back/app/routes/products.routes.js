// Importa el módulo Router de Express
import { Router } from "express";
// Importa todas las funciones controladoras desde el archivo "../controllers/products.controller"
import * as controller from "../controllers/products.controller";

// Crea una instancia de Router
const router = Router();

// Ruta para crear un nuevo producto
router.post('/pro', controller.createProduct);

// Ruta para obtener un producto específico por su ID
router.get('/pro/:id', controller.findOneProduct);

// Ruta para realizar un ping de prueba en la base de datos
router.get('/ping', controller.pingProduct);

// Ruta para obtener todos los productos
router.get('/pro', controller.findAllProducts);

// Ruta para actualizar un producto específico por su ID
router.put('/pro/:id', controller.updateProduct);

// Ruta para eliminar un producto específico por su ID
router.delete('/pro/:id', controller.deleteProduct);

// Exporta el enrutador como el valor predeterminado del módulo
export default router;
