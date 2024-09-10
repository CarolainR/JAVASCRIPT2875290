document.getElementById('registerBtn').addEventListener('click', function() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validación simple
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // Guardar datos en localStorage
    localStorage.setItem('user', JSON.stringify({
        fullName: fullName,
        email: email,
        password: password
    }));
    
    alert('Registro exitoso');
    window.location.href = './login.html'; // Redirigir al login después del registro
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