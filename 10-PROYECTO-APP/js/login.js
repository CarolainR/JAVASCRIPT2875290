document.querySelector('.btn').addEventListener('click', function() {
    const email = document.querySelector('.correo').value;
    const password = document.querySelector('.contraseña').value;

    // get datos del localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Inicio de sesión exitoso');
        localStorage.setItem('loggedIn', true); // usuario  autenticado
        window.location.href = '../index.html'; // Redirigir al index después del inicio de sesión
    } else {
        alert('correo o contraseña incorrecta');
    }
});

/*-----------------------------------logout--------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar la acción por defecto del enlace
            localStorage.removeItem('loggedIn'); // Eliminar el estado de autenticación
            alert('Has cerrado sesión exitosamente'); // Mostrar mensaje de alerta
            window.location.href = '../index.html'; // Redirigir a index.html
        });
    }
});