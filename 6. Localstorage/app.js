/* iniciar sesion con local storage*/
/* const ingresoUsuario = document.querySelector('#user')
const clave = document.querySelector('#code')
const submit = document.querySelector('#submit')

console.log(ingreso.value);

let nombre ="Pedro"
let items = ['uno','dos','tres','cuatro','cinco','seis' ]
let cancion = {
        id: 1,
        nombre: 'Stairway to Heaven',
        band: 'Led Zeppelin',
        year: 1971,
        genero: 'Rock / Hard Rock',
        image: 'https://i1.sndcdn.com/artworks-000127380203-93pa4d-t500x500.jpg',
}
//LLAMADO DE STORAGE EN APPLICATION
/* function addStorage(){
    localStorage.setItem('name', nombre)
} */
/*

    function addStorage(key,value){
        if(typeof value == 'string'){
            localStorage.setItem(key,value)   
        }else{
            localStorage.setItem(key,JSON.stringify(value))
        }

    }

    //MOSTRAR ELEMENTOS
    addStorage('name', nombre)
    addStorage('car', items)
    addStorage('song', pelicula) 

    function getData(){
        let userName = localStorage.getItem('name');
        let userCar = JSON.parse (localStorage.getItem('car'));
        let userSong = JSON.parse(localStorage.getItem('song'));

        console.log(userCar, typeof userCar)

       userCar.forEach(item => {
            console.log(item)

        });
    }

    
    obtenerDatos()

    function borrarItem (item){
        localStorage.removeItem(item)
    }
    
    // BORRAR TODOS LOS ITEMS
    function borrarTodo (){
        localStorage.clear()
    }

    borrarTodo () */

    const formulario = document.querySelector('#formulario')
    const userName = document.querySelector('#user')
    const password = document.querySelector('#code')
    const submit = document.querySelector('.submit')

//Registrar el dato del user en localstorage
    let user = { 
        userName: 'admin',
        password: '1234',
}

    localStorage.setItem('user', JSON.stringify(user))
    //INICIO DE SESION
    function validarUsuario (e){
        e.preventDefault();

        let currentUser =JSON.parse(localStorage.getItem('user'))
        console.log(currentUser.userName)
        console.log(currentUser.password)

        console.log (Boolean(userName.value === currentUser.userName));
        console.log (Boolean(password.value === currentUser.password));

        if(userName.value === currentUser.userName && password.value 
            === currentUser.password){
                console.log('felicidades, puedes entrar')
                window.location = './userpage.html'
            }else {
                console.log('sigue intentando')
            }
            formulario.reset()
        
    }

    formulario.addEventListener('submit', validarUsuario)