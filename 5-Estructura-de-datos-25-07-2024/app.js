//console.log(cancionesRock[26].nombre, cancionesRock[26].year)
/* cancionesRock.forEach( element => {
    console.log(element.genero)
}); */
/* const container = document.querySelector('.container')
cancionesRock.forEach( element => {
    let card= document.createElement('div');

    card.innerHTML =
    `<img src="${element.imagen}">
    </h1>${element.nombre}</h1>
    <p>${element.year}</p>
    ` //estas comillas invertidas (``) son literal templates
    container.appendChild (card);
}); */

const container = document.querySelector('.container')
cancionesRock.forEach( element => {
    let card= document.createElement('div');

    card.innerHTML =
    `<section class="container">
        <div class="nombre">Nombre: ${element.nombre}</div>
        <div class="banda"> Banda: ${element.banda}</div>
        <div class="año">${element.year}</div>
        <div class="genero">${element.genero}</div>
        <img src="${element.image}">
    </section>
    `
    container.appendChild (card);
});