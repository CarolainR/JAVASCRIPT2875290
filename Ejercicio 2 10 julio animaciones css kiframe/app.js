const sol= document.querySelector('.sol');
const nube1= document.querySelector('.nubeuno');
const nube2= document.querySelector('.nubedos');
const nube3= document.querySelector('.nubetres');
const nube4= document.querySelector('.nubecuatro')
const montañas= document.querySelector('.greenMountains')
const solGuia= document.querySelector('.solGuia')
const contenedor= document.querySelector('.container')

function moverSol(){
    sol.style.animation = "animation: move 6s linear";
    solGuia.style.animation = "animation: move 6s linear"
    console.log ('Ejecutando')
}

function cambiarColorSol (){

}

function moverNubes (){

}

function amanecerAnochecer (){

}

function cambiarColorMontañas (){

}
// LLAMADOS

solGuia.addEventListener('click', moverSol);
sol.addEventListener('click', cambiarColorSol);
contenedor.addEventListener('click', amanecerAnochecer);
montañas.addEventListener('click', cambiarColorMontañas)
nube1.addEventListener('click', moverNubes)
nube2.addEventListener('click', moverNubes)
nube3.addEventListener('click', moverNubes)
nube4.addEventListener('click', moverNubes)