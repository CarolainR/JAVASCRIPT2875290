const formulario = document.querySelector('.inputsregistro')
const username = document.querySelector('.registrousername')
const password = document.querySelector('.registrocode')
const email = document.querySelector('.email')
const countrie = document.querySelector('.countrie')
const phone = document.querySelector('.registrophone')

function registro(e) {
    
    e.preventDefault();
    let user = {
        userName: username.value,
        userEmail: email.value,
        userCountrie: countrie.value,
        userPhone: phone.value,
        userCode: password.value,
    }

    localStorage.setItem('user', JSON.stringify(user))

    formulario.reset();  
}

 formulario.addEventListener('submit', registro) 