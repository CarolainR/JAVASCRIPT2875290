const formulario = document.querySelector('.inputs')
const username = document.querySelector('.user')
const password = document.querySelector('.code')


function iniciarSesion (e){
    e.preventDefault(); 

    let iniciarUser = JSON.parse( localStorage.getItem('user') )
    

    console.log(Boolean(username.value === iniciarUser.userName)) ;
    console.log(Boolean(password.value === iniciarUser.userPassword)) ;

    if(username.value === iniciarUser.userName && password.value === iniciarUser.userPassword){
        window.location = "userpage.html"
    }else{
        console.log('username o password incorrecto')
    }

    formulario.reset()
}

//LLAMADO 
 formulario.addEventListener('submit', iniciarSesion)  