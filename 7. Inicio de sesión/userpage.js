const container = document.querySelector('.container');
let userName = JSON.parse( localStorage.getItem('user') );

cancionesRock.forEach( element => {
    let card= document.createElement('div');

    card.innerHTML =
    `<section class="card">
        <div class="nombre">Nombre: ${element.nombre}</div>
        <div class="banda"> Banda: ${element.band}</div>
        <div class="año">${element.year}</div>
        <div class="genero">${element.genero}</div>
        <img  class="image" src="${element.image}">
    </section>
    `
    container.appendChild (card);
});