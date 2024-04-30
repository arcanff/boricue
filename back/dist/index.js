"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _index = _interopRequireDefault(require("./config/index.js"));
// Se importan los modulos necesarios

// Inicia el servidor de la aplicación Express y lo hace escuchar en el puerto especificado
_app["default"].listen(_app["default"].get("PORT"), _index["default"]);