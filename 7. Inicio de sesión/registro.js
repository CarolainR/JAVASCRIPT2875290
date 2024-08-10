//Verificar IDs: Asegúrate de que los IDs de los campos coincidan con los utilizados en el registro.js.

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit',function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const countrie = document.getElementById('countrie').value;
    const registrophone = document.getElementById('registrophone').value;

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('countrie', countrie);
    localStorage.setItem('registrophone', registrophone);

    // Redireccion a index.html
    window.location.href = 'index.html';
});
