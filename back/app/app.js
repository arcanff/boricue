// Se importan los módulos necesarios
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import environment from './config/enviroments';
import productRoutes from './routes/products.routes.js';
import userRoutes from './routes/users.routes';
import morgan from 'morgan';

// Crea una instancia de la aplicación Express
const app = express();

// Configuración de la aplicación
app.set("PORT", process.env.PORT || 8080);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Ruta de inicio
app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

// Rutas de la API
app.use('/api', productRoutes); // http://localhost:3000/api/pro
app.use('/api', userRoutes); // http://localhost:3000/api/user
// Exporta la aplicación como el valor predeterminado del módulo
export default app;
