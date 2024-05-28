// HOMEPAGE //
import express from 'express';
import fetch from 'node-fetch';
import axios from 'axios';
import bcrypt from 'bcryptjs'

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/acerca', (req, res) => {
    res.render('acerca');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/contactanos', (req, res) => {
    res.render('contactanos');
});

router.get('/preguntas', (req, res) => {
    res.render('preguntas');
});

router.get('/servicios', (req, res) => {
    res.render('servicios');
});

router.get('/T&C', (req, res) => {
    res.render('tyc');
});

//DASHBOARD//

router.get('/Inicio', (req, res) => {
    res.render('dashInicio');
});

router.get('/Publicaciones', (req, res) => {
    res.render('dashPublicaciones');
});

router.get('/CrearPublicacion', (req, res) => {
    res.render('dashCrearPubli');
});

router.get('/EditarPublicacion', (req, res) => {
    res.render('dashEditarPubli');
});

router.get('/Chat', (req, res) => {
    res.render('dashChat');
});

// perfil
router.get('/Perfil', async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/api/user');
        const datos = await response.json();
        res.render('dashPerfil', { datos });
    } catch (error) {
        console.error(error);
        res.redirect('/error');
    }
});


router.get('/Reportes', (req, res) => {
    res.render('dashReportes');
});

// editar perfil
router.put('/EditarPerfil', async (req, res) => {
    try {
        const response = await fetch('http://localhost:3000/api/user');
        const datos = await response.json();
        res.render('dashEditarPerfil', { datos });
    } catch (error) {
        console.error(error);
        res.redirect('/error');
    }
});


// Función para verificar si un campo ya existe en la base de datos
const checkIfExists = async (field, value) => {
    const response = await axios.get(`http://localhost:3000/api/user/check?${field}=${value}`);
    return response.data.exists; // Suponiendo que la respuesta tiene una propiedad "exists"
};

const validEmailExtensions = ['@gmail.com', '@hotmail.com', '@misena.edu.co', '@soy.sena.edu.co'];

// sing up
router.post('/singup', async (req, res) => {
    try {
        const data = req.body;
        console.log('Datos recibidos del formulario:', data); // Verificar los datos recibidos

        // Validar la extensión del correo
        if (!validEmailExtensions.some(ext => data.mail.endsWith(ext))) {
            return res.status(400).send('Correo no válido. Use una extensión válida como @gmail.com, @hotmail.com, @misena.edu.co, @soy.sena.edu.co.');
        }

        // Verificaciones
        const emailExists = await checkIfExists('correo', data.mail);
        if (emailExists) {
            return res.status(400).send('Lo sentimos, este correo ya está registrado.');
        }

        const idExists = await checkIfExists('identificacion', data.id);
        if (idExists) {
            return res.status(400).send('Lo sentimos, esta identificación ya está registrada.');
        }

        const phoneExists = await checkIfExists('telefono', data.phone);
        if (phoneExists) {
            return res.status(400).send('Lo sentimos, este teléfono ya está registrado.');
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(data.pass, 10);

        // Crear un nuevo usuario con los datos del formulario
        const newUser = {
            identificacion: data.id,
            nombres: data.names,
            direccion: data.dress,
            telefono: data.phone,
            correo: data.mail,
            contrasena: hashedPassword,
            rol: data.rol,
            estado: 'Activo' // O el estado que desees por defecto
        };

        // Realizar la solicitud POST al servidor API con el nuevo usuario
        const response = await axios.post('http://localhost:3000/api/user', newUser);
        console.log('Usuario creado correctamente:', response.data);

        // Redirigir al cliente a la página principal u otra página de tu elección
        res.status(200).send('Usuario creado correctamente'); // Puedes cambiar la URL a la página que desees
    } catch (error) {
        console.error('Error al crear el usuario:', error.response ? error.response.data : error.message);
        res.status(500).send('Ocurrió un error al crear el usuario.'); // Envía un código de estado de error si ocurre algún problema
    }
});


export default router;
