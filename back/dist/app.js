"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _enviroments = _interopRequireDefault(require("./config/enviroments"));
var _productsRoutes = _interopRequireDefault(require("./routes/products.routes.js"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var _morgan = _interopRequireDefault(require("morgan"));
// Se importan los módulos necesarios

// Crea una instancia de la aplicación Express
var app = (0, _express["default"])();

// Configuración de la aplicación
app.set("PORT", process.env.PORT || 8080);

// Middlewares
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));

// Ruta de inicio
app.get('/', function (req, res) {
  res.send({
    message: 'Hello Worldongo'
  });
});

// Rutas de la API
app.use('/api', _productsRoutes["default"]); // http://localhost:3000/api/pro
app.use('/api', _users["default"]); // http://localhost:3000/api/user
// Exporta la aplicación como el valor predeterminado del módulo
var _default = app;
exports["default"] = _default;