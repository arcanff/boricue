"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = _interopRequireDefault(require("../app.js"));
var _message = _interopRequireDefault(require("./message.js"));
// Importa el archivo "app.js" 

// Importa el archivo "message.js" 

// Define una función llamada caseEntorno
var caseEntorno = function caseEntorno() {
  // Realiza diferentes acciones según el valor de la variable de entorno NODE_ENV 
  // E imprime en la consola el mensaje y su respectivo color de entorno
  switch (process.env.NODE_ENV) {
    case "production":
      (0, _message["default"])("Api lista en el puerto ".concat(_app["default"].get("PORT")), "danger"); // en caso de producion el mensaje debe estar en rojo
      break;
    case "develop":
      (0, _message["default"])("Api lista en el puerto ".concat(_app["default"].get("PORT")), "success"); // en caso de desarrollo el mensaje debe estar en verde
      break;
    case "qa":
      (0, _message["default"])("Api lista en el puerto ".concat(_app["default"].get("PORT")), "warning"); // en caso de pruebas el mensaje debe estar en amarillo
      break;
    default:
      (0, _message["default"])("Api lista en el puerto ".concat(_app["default"].get("PORT")), "success"); // en caso de ser default el mensaje debe estar en blanco
      break;
  }
};

// Exporta la función caseEntorno como el valor predeterminado del módulo
var _default = caseEntorno;
exports["default"] = _default;