const saludo = document.querySelector('#saludo')

let nombreuser = JSON.parse (localStorage.getItem('user'));

saludo.innerHTML = 'Hola' ${nombreuser.userName}😊 //sacar iconos con window+ . (punto)
