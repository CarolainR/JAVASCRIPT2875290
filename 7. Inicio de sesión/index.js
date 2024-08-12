const loginForm = document.getElementById('loginForm');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Recuperar datos de usuario almacenados
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Obtener credenciales ingresadas
    const enteredUsername = document.getElementById('loginUsername').value.trim();
    const enteredPassword = document.getElementById('loginPassword').value.trim();

    // Validacion Basica
    if (!enteredUsername || !enteredPassword) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validacion de credenciales
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        console.log('funcionando')// Redireccionar a userpage.html
        window.location.href = './userpage.html';
    } else {
        alert('Nombre de usuario o contraseña inválida');
    }
});
/*asegúrate de que el localStorage esté almacenando correctamente los datos. 
A veces los datos pueden no estar almacenados correctamente debido a errores en 
el código de registro*/

/*Verificar Datos de Almacenamiento: Puedes agregar console.log() 
para verificar si los valores de storedUsername y storedPassword son los esperados.*/