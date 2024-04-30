// Importa la conexión a la base de datos 'pool' desde el archivo "../config/database/db.js"
import { pool } from "../config/database/db";
// Importa la función 'message' desde el archivo "../config/message.js"
import message from "../config/message";

// Controlador para crear un producto
export const createProduct = async (req, res) => {
  try {
    // Obtiene los datos del cuerpo de la solicitud (req.body)
    const { name, desc, price, link, size, category } = req.body;

    // Realiza una consulta para insertar el producto en la base de datos
    const result = await pool.query(
      `INSERT INTO products (nombre, descripcion, precio, enlace, talla, categoria) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, desc, price, link, size, category]
    );

    // Devuelve el resultado de la consulta en formato JSON
    res.json(result);
  } catch (error) {
    // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
    message(error.message, "danger");
    res.status(500).send(error.message);
  }
};

// Controlador para obtener todos los productos
export const findAllProducts = async (req, res) => {
  try {
    // Realiza una consulta para obtener todos los productos de la base de datos
    const [rows] = await pool.query(`SELECT * FROM products`);

    // Devuelve los productos en formato JSON
    res.json(rows);
  } catch (error) {
    // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
    message(error.message, "danger");
    res.status(500).send(error.message);
  }
};

// Controlador para obtener un producto específico por su ID
export const findOneProduct = async (req, res) => {
  try {
    // Obtiene el ID del producto de los parámetros de la solicitud (req.params)
    const id = req.params.id;

    // Realiza una consulta para obtener el producto con el ID especificado
    const [result] = await pool.query(
      `SELECT idproducto, nombre, descripcion, precio, enlace, talla, categoria FROM products WHERE idproducto = ?`,
      [id]
    );

    // Devuelve el producto encontrado en formato JSON
    res.json(result[0]);
  } catch (error) {
    // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
    message(error.message, "danger");
    res.status(500).send(error.message);
  }
};

// Controlador para realizar un ping de prueba en la base de datos
export const pingProduct = async (req, res) => {
  try {
    // Realiza una consulta para obtener un resultado de prueba de la base de datos
    const [result] = await pool.query(`SELECT "Hello world" as RESULT`);

    // Devuelve el resultado en la respuesta
    res.send(result[0]);
  } catch (error) {
    // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
    message(error.message, "danger");
    res.status(500).send(error.message);
  }
};

// Controlador para actualizar un producto específico por su ID
export const updateProduct = async (req, res) => {
  try {
    // Obtiene el ID del producto de los parámetros de la solicitud (req.params)
    const id = req.params.id;
    // Obtiene los datos actualizados del cuerpo de la solicitud (req.body)
    const { name, desc, price, link, size, category } = req.body;

    // Realiza una consulta para actualizar el producto con el ID especificado
    const result = await pool.query(
      `UPDATE products SET nombre = ?, descripcion = ?, precio = ?, enlace = ?, talla = ?, categoria = ? WHERE idproducto = ?`,
      [name, desc, price, link, size, category, id]
    );

    // Devuelve el resultado de la consulta en formato JSON
    res.json(result);
  } catch (error) {
    // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
    message(error.message, "danger");
    res.status(500).send(error.message);
  }
};

// Controlador para eliminar un producto por su ID
// Controlador para eliminar un producto por su ID
export const deleteProduct = async (req, res) => {
  try {
    // Obtiene el ID del producto de los parámetros de la solicitud (req.params)
    const id = req.params.id;

    console.log(`Eliminando el producto con ID: ${id}`); 

    // Realiza una consulta para eliminar el producto con el ID 
    const result = await pool.query(
      `DELETE FROM products WHERE idproducto = ?`,
      [id]
    );

    console.log(`Resultado de la eliminación:`, result); // Agrega un registro de depuración aquí

    // Devuelve el resultado de la consulta en formato JSON
    res.json(result);
  } catch (error) {
    // Muestra un mensaje de error y devuelve el mensaje de error en la respuesta
    message(error.message, "danger");
    res.status(500).send(error.message);
  }
};
