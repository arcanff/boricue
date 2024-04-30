// Importa el paquete 'colors'
import colors from 'colors';
// Importa la función 'log' del módulo 'console'
import { log } from 'console';

// Define una función llamada 'message'
const message = (mensaje, tipo) => {
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
}

// Exporta la función 'message' como el valor predeterminado del módulo
export default message;
