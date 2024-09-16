

// greeting user

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const greetingDiv = document.getElementById('greeting');
    const usernameSpan = document.getElementById('username');

    if (isLoggedIn) {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            usernameSpan.textContent = user.email || user.username;
            greetingDiv.style.display = 'block';
        }
    }

    //  logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('user');
            greetingDiv.style.display = 'none'; // Ocultar saludo
            alert('Has cerrado sesión exitosamente');
            window.location.href = '../index.html'; // Redirigir al index
        });
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Aquí deberías validar las credenciales del usuario
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Guardar información del usuario en localStorage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('user', JSON.stringify({ username, email }));
    
    // Redirigir al usuario a la página principal o donde desees
    window.location.href = './index.html';
});







/* para base de datos */

function searchFunction() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const container = document.getElementById('contentContainer');
    
    // Limpiar el contenedor
    container.innerHTML = '';
    
    // Filtrar y mostrar los resultados
    mediosMixology.forEach(medio => {
        if (medio.titulo.toLowerCase().includes(filter)) {
            const item = document.createElement('div');
            item.className = 'row';
            
            item.innerHTML = `
                <img class="imgsColumns" src="${medio.image}" alt="${medio.titulo}">
                <p>${medio.titulo}</p>
                <div class="icons">
                    ${medio.medio === 'pdf' ? '<i class="fas fa-download"></i>' : '<i class="fas fa-play"></i>'}
                    <i class="fas fa-book"></i>
                </div>
            `;
            
            container.appendChild(item);
        }
    });
}

//Mostrar todos los elementos inicialmente
window.onload = () => {
    searchFunction();
};
/* const container = document.querySelector('')
mediosMixology.forEach( element => {
    let card= document.createElement('');

    card.innerHTML =
    `<section class="item">
        <div class="nombre">Nombre: ${element.nombre}</div>
        <div class="banda"> Banda: ${element.band}</div>
        <div class="año">${element.year}</div>
        <div class="genero">${element.genero}</div>
        <img  class="image" src="${element.image}">
    </section>
    `
    container.appendChild (item);
}); */