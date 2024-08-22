const container = document.querySelector('.container')
const buscador = document.querySelector(".buscador")
const textoBusqueda = document.querySelector("#textoBusqueda")
const listaStatus = document.querySelector("#listaStatus")


 function mostrarResults(cancionesRock){
cancionesRock.forEach( element => {
    let box= document.createElement('div');
    box.classList.add("box")
    console.log(cancionesRock)

    box.innerHTML =
    `<section class="card">
        <div class="nombre">Nombre: ${element.nombre}</div>
        <div class="banda"> Banda: ${element.band}</div>
        <div class="año">${element.year}</div>
        <div class="genero">${element.genero}</div>
        <img  class="image" src="${element.image}">
    </section>
    `
    container.appendChild (box);
    
})};

  
  
  
  function filtrar(e) {
  
    e.preventDefault()
    container.innerHTML = ""
    let filtro = cancionesRock
    
  
    if(listaStatus.value != "all"){
      filtro = filtro.filter( cancion => cancion.genero.toString().toLowerCase().includes(listaStatus.value.toLowerCase())).filter(cancion => cancion.band.toLowerCase().includes(textoBusqueda.value.toLowerCase()) )
  
    console.log(filtro)
  
    mostrarResults(filtro)
  
    }
  
    else{
  
      if(textoBusqueda.value){
        filtro = cancionesRock.filter(cancion => cancion.band.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
        console.log(cancionesRock[1].band)
        console.log(textoBusqueda.value.toLowerCase())
        mostrarResults(filtro)
  
      }
  
      else{
        mostrarResults(cancionesRock)
      }
  
      textoBusqueda.value= ""
      
    }
  
  }
  
  buscador.addEventListener('submit',filtrar);