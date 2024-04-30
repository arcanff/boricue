// Importa el archivo "app.js" 
import app from "../app.js";
// Importa el archivo "message.js" 
import message from "./message.js";

// Define una función llamada caseEntorno
const caseEntorno = () => {
    // Realiza diferentes acciones según el valor de la variable de entorno NODE_ENV 
    // E imprime en la consola el mensaje y su respectivo color de entorno
    switch (process.env.NODE_ENV) {
        case "production":
            message(`Api lista en el puerto ${app.get("PORT")}`, "danger"); // en caso de producion el mensaje debe estar en rojo
            break;
        
        case "develop":
            message(`Api lista en el puerto ${app.get("PORT")}`, "success"); // en caso de desarrollo el mensaje debe estar en verde
            break;

        case "qa":
            message(`Api lista en el puerto ${app.get("PORT")}`, "warning"); // en caso de pruebas el mensaje debe estar en amarillo
            break;

        default:
            message(`Api lista en el puerto ${app.get("PORT")}`, "success"); // en caso de ser default el mensaje debe estar en blanco
            break;
    }
}

// Exporta la función caseEntorno como el valor predeterminado del módulo
export default caseEntorno;
