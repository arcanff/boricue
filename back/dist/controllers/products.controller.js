"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.pingProduct = exports.findOneProduct = exports.findAllProducts = exports.deleteProduct = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _db = require("../config/database/db");
var _message = _interopRequireDefault(require("../config/message"));
// Importa la conexión a la base de datos 'pool' desde el archivo "../config/database/db.js"

// Importa la función 'message' desde el archivo "../config/message.js"

// Controlador para crear un producto
var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, desc, price, link, size, category, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Obtiene los datos del cuerpo de la solicitud (req.body)
          _req$body = req.body, name = _req$body.name, desc = _req$body.desc, price = _req$body.price, link = _req$body.link, size = _req$body.size, category = _req$body.category; // Realiza una consulta para insertar el producto en la base de datos
          _context.next = 4;
          return _db.pool.query("INSERT INTO products (nombre, descripcion, precio, enlace, talla, categoria) VALUES (?, ?, ?, ?, ?, ?)", [name, desc, price, link, size, category]);
        case 4:
          result = _context.sent;
          // Devuelve el resultado de la consulta en formato JSON
          res.json(result);
          _context.next = 12;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
          (0, _message["default"])(_context.t0.message, "danger");
          res.status(500).send(_context.t0.message);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Controlador para obtener todos los productos
exports.createProduct = createProduct;
var findAllProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _yield$pool$query, _yield$pool$query2, rows;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _db.pool.query("SELECT * FROM products");
        case 3:
          _yield$pool$query = _context2.sent;
          _yield$pool$query2 = (0, _slicedToArray2["default"])(_yield$pool$query, 1);
          rows = _yield$pool$query2[0];
          // Devuelve los productos en formato JSON
          res.json(rows);
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
          (0, _message["default"])(_context2.t0.message, "danger");
          res.status(500).send(_context2.t0.message);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function findAllProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Controlador para obtener un producto específico por su ID
exports.findAllProducts = findAllProducts;
var findOneProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _yield$pool$query3, _yield$pool$query4, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // Obtiene el ID del producto de los parámetros de la solicitud (req.params)
          id = req.params.id; // Realiza una consulta para obtener el producto con el ID especificado
          _context3.next = 4;
          return _db.pool.query("SELECT idproducto, nombre, descripcion, precio, enlace, talla, categoria FROM products WHERE idproducto = ?", [id]);
        case 4:
          _yield$pool$query3 = _context3.sent;
          _yield$pool$query4 = (0, _slicedToArray2["default"])(_yield$pool$query3, 1);
          result = _yield$pool$query4[0];
          // Devuelve el producto encontrado en formato JSON
          res.json(result[0]);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
          (0, _message["default"])(_context3.t0.message, "danger");
          res.status(500).send(_context3.t0.message);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function findOneProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Controlador para realizar un ping de prueba en la base de datos
exports.findOneProduct = findOneProduct;
var pingProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _yield$pool$query5, _yield$pool$query6, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _db.pool.query("SELECT \"Hello world\" as RESULT");
        case 3:
          _yield$pool$query5 = _context4.sent;
          _yield$pool$query6 = (0, _slicedToArray2["default"])(_yield$pool$query5, 1);
          result = _yield$pool$query6[0];
          // Devuelve el resultado en la respuesta
          res.send(result[0]);
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
          (0, _message["default"])(_context4.t0.message, "danger");
          res.status(500).send(_context4.t0.message);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function pingProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Controlador para actualizar un producto específico por su ID
exports.pingProduct = pingProduct;
var updateProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, name, desc, price, link, size, category, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // Obtiene el ID del producto de los parámetros de la solicitud (req.params)
          id = req.params.id; // Obtiene los datos actualizados del cuerpo de la solicitud (req.body)
          _req$body2 = req.body, name = _req$body2.name, desc = _req$body2.desc, price = _req$body2.price, link = _req$body2.link, size = _req$body2.size, category = _req$body2.category; // Realiza una consulta para actualizar el producto con el ID especificado
          _context5.next = 5;
          return _db.pool.query("UPDATE products SET nombre = ?, descripcion = ?, precio = ?, enlace = ?, talla = ?, categoria = ? WHERE idproducto = ?", [name, desc, price, link, size, category, id]);
        case 5:
          result = _context5.sent;
          // Devuelve el resultado de la consulta en formato JSON
          res.json(result);
          _context5.next = 13;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
          (0, _message["default"])(_context5.t0.message, "danger");
          res.status(500).send(_context5.t0.message);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function updateProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// Controlador para eliminar un producto por su ID
exports.updateProduct = updateProduct;
var deleteProduct = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          // Obtiene el ID del producto de los parámetros de la solicitud (req.params)
          id = req.params.id; // Realiza una consulta para eliminar el producto con el ID 
          _context6.next = 4;
          return _db.pool.query("DELETE FROM products WHERE idproducto = ?", [id]);
        case 4:
          result = _context6.sent;
          // Devuelve el resultado de la consulta en formato JSON
          res.json(result);
          _context6.next = 12;
          break;
        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
          (0, _message["default"])(_context6.t0.message, "danger");
          res.status(500).send(_context6.t0.message);
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return function deleteProduct(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.deleteProduct = deleteProduct;