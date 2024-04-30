"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _colors = _interopRequireDefault(require("colors"));
var _console = require("console");
// Importa el paquete 'colors'

// Importa la función 'log' del módulo 'console'

// Define una función llamada 'message'
var message = function message(mensaje, tipo) {
  // Utiliza un bloque switch para mostrar el mensaje con colores según el tipo especificado
  switch (tipo) {
    case 'danger':
      console.log(mensaje.bgRed); // Rojo
      break;
    case 'warning':
      console.log(mensaje.bgYellow); // Amarillo
      break;
    case 'success':
      console.log(mensaje.bgGreen); // Verde
      break;
    default:
      console.log(mensaje.bgWhite); // Blanco
      break;
  }
};

// Exporta la función 'message' como el valor predeterminado del módulo
var _default = message;
exports["default"] = _default;