//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}


// error message
const validEmailExtensions = ['@gmail.com', '@hotmail.com', '@misena.edu.co', '@soy.sena.edu.co'];

document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const form = e.target;
    const formData = new FormData(form);

    const data = {
        id: formData.get('id'),
        names: formData.get('names'),
        dress: formData.get('dress'),
        phone: formData.get('phone'),
        mail: formData.get('mail'),
        pass: formData.get('pass'),
        rol: formData.get('rol')
    };

    // Validar la extensión del correo
    if (!validEmailExtensions.some(ext => data.mail.endsWith(ext))) {
        showError('Correo no válido. Por favor use una extensión de correo válida.');
        return;
    }

    try {
        const response = await fetch('/singup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            Swal.fire({
                title: 'Usuario creado',
                text: 'Usuario creado correctamente',
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = '/login'; // Redirigir en caso de éxito
            });
        } else {
            showError(result.message || 'Ocurrió un error al enviar el formulario.');
        }
    } catch (error) {
        showError('Ocurrió un error al enviar el formulario.');
    }
});

function showError(message) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
    setTimeout(() => {
        errorMessageDiv.style.display = 'none';
    }, 4000);
}

// log in

document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const data = {
        correo: formData.get('email'),
        contrasena: formData.get('password')
    };

    try {
        const response = await axios.post('http://localhost:3000/api/login', data);

        if (response.data.success) {
            Swal.fire({
                title: 'Inicio de sesión exitoso',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Ok'
            }).then(() => {
                // Redirigir al usuario a otra página después de un inicio de sesión exitoso
                window.location.href = '/home'; // Cambia esto a la página deseada
            });
        } else {
            showError(response.data.message || 'Ocurrió un error al iniciar sesión.');
        }
    } catch (error) {
        showError('Ocurrió un error al iniciar sesión.');
    }
});

function showError(message) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
    setTimeout(() => {
        errorMessageDiv.style.display = 'none';
    }, 2000);
}