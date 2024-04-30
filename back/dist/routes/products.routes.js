"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var controller = _interopRequireWildcard(require("../controllers/products.controller"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Importa el módulo Router de Express

// Importa todas las funciones controladoras desde el archivo "../controllers/products.controller"

// Crea una instancia de Router
var router = (0, _express.Router)();

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
router["delete"]('/pro/:id', controller.deleteProduct);

// Exporta el enrutador como el valor predeterminado del módulo
var _default = router;
exports["default"] = _default;