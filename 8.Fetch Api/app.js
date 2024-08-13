const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(element => {
      //Name: Leanne ...
      //Username: Bret
      console.log(`"Nombre" ${element.name}`)
      console.log(` "username" ${element.name} `)
    });
  })


  /* 1.con javascrip t: crear un elemento "div" con create element y asignarle la clase box

  2.crear un h1 con createElement y hacer appendchild al div de clase "box"

  3. crear un "p" con createElement y hacer appendchild al div de clase "box" */


const box = document.createElement('div');
  box.classList.add = ('box');

const h1 = document.createElement('h1');
  h1.textContent = element.name;
  box.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = element.username;
  box.appendChild = 'p';

  container.appendChild(box);