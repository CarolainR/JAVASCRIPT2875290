/* function toggleMenu() {
    var dropdown = document.getElementById("dropdownContent");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function toggleProfileMenu() {
    var profileMenu = document.getElementById("profileMenuContent");
    if (profileMenu.style.display === "block") {
        profileMenu.style.display = "none";
    } else {
        profileMenu.style.display = "block";
    }
} */
    window.onload = function() {
        const loggedIn = localStorage.getItem('loggedIn');
        if (!loggedIn) {
            window.location.href = './login.html'; // Redirigir al login si no está autenticado
        }
    };

/* logout--------------------------------------------------------------------- */

    document.addEventListener('DOMContentLoaded', function() {
        const logoutBtn = document.getElementById('logoutBtn');
    
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(event) {
                event.preventDefault(); // Evitar la acción por defecto del enlace
                localStorage.removeItem('loggedIn'); // Eliminar el estado de autenticación
                alert('Has cerrado sesión exitosamente'); // Mostrar mensaje de alerta
                window.location.href = './index.html'; // Redirigir a index.html
            });
        }
    });