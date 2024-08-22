/* const container = document.querySelector('.container')
let url = 'https://rickandmortyapi.com/api/character'
fetch(url)
.then(response=> response.json())
.then(data => {
    data.results.forEach(element => {
        console.log (element.name)
    });
}) */

    const container = document.querySelector(".container")
    const  circle = document.querySelector(".status")
    const buscador = document.querySelector("#buscador")
    const textoBusqueda = document.querySelector("#textoBusqueda")
    const listaStatus = document.querySelector("#listaStatus")
    let results;

    let url = "https://rickandmortyapi.com/api/character"


    fetch(url)
     .then(response => response.json())
        .then(data => {

    results = data.results;

    mostrarResults(data.results)

    
  })
    //para pintar el estado segun el caso
    function pintar (elemento){
        switch(elemento){
            case 'alive':
                return 'green'
            break
            case 'dead':
                return 'red'
            break
            default:
                return 'gray'
        }
    }

    buscador.addEventListener('submit',filtrar)

    function mostrarResults(results){
        results.forEach(element => {
      
          const card = document.createElement('div')
          card.classList.add("card");
          container.appendChild(card)
          container.appendChild(card)
          card.innerHTML =` 
          <img src="${element.image}">
          <div class="name">
          <h2>${element.name}</h2>
          <div class="section">
          
          <div class="status"><i style="color: red;" class="fa-regular fa-heart"> </i> ${pintar(element.status)}</i></div>
          <span class="id">${element.status} - ${element.species} </span>
          </div>
              <div class="card-info">
              <p><strong>Última ubicación conocida:</strong><br>${element.location.name}</p>
              <p><strong>Visto por primera vez en:</strong><br>${element.origin.name}</p>
              </div>
      </div>
      </div>
      `
        })
      }
    

        
        container.appendChild(card)


        /* textoBusqueda.value.toLowerCase()== word.mame.toLowerCase() */


    function filtrar(e) {

    e.preventDefault()
  
    container.innerHTML = ""
  
    if(listaStatus.value != "all"){
      const filtro = results.filter( word => word.status == listaStatus.value).filter(word =>  word.name.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
  
    console.log(filtro)
  
    mostrarResults(filtro)
  
    }
  
    else{
  
      if(textoBusqueda.value){
        const filtro = results.filter(word => word.name.toLowerCase().includes(textoBusqueda.value.toLowerCase()) );
  
        mostrarResults(filtro)
  
      }
  
      else{
        mostrarResults(results)
      }
  
      
    }
  
  buscador.addEventListener('submit',filtrar)
  
  }