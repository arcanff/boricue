import bcrypt from 'bcryptjs';
import axios from 'axios';

// Otros import y funciones...

const loginUser = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;

        // Buscar el usuario por correo
        const response = await axios.get(`http://localhost:3000/api/user?correo=${correo}`);
        const users = response.data;

        if (users.length === 0) {
            return res.status(400).json({ success: false, message: 'Correo o contraseña incorrectos.' });
        }

        const user = users[0];

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Correo o contraseña incorrectos.' });
        }

        // Si todo es correcto, devolver éxito
        res.status(200).json({ success: true, message: 'Inicio de sesión exitoso.', user: { id: user.idusuario, nombres: user.nombres, rol: user.rol } });
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        res.status(500).json({ success: false, message: 'Ocurrió un error al iniciar sesión.' });
    }
};

export {
    // Otras exportaciones...
    loginUser
};
