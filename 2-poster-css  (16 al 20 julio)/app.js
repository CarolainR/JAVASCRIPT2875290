const button = document.querySelector(".button")
const superman = document.querySelector(".superman");
const batman = document.querySelector(".batman");
const batgirl = document.querySelector(".batgirl");
const wonderwoman = document.querySelector(".wonderwoman");
const batimovil = document.querySelector(".batimovil");
const container = document.querySelector(".container")
let e = 0

function play(){

    superman.style.animationPlayState = "running";
    batman.style.animationPlayState = "running";
    batgirl.style.animationPlayState = "running";
    wonderwoman.style.animationPlayState = "running";
    batimovil.style.animationPlayState= "running";
    console.log ('TODO ESTA OK')
    
 }
 paused()
 {
    superman.style.animationPlayState = "paused";
    batman.style.animationPlayState = "paused";
    batgirl.style.animationPlayState = "paused";
    wonderwoman.style.animationPlayState = "paused";
    batimovil.style.animationPlayState = "paused";
    console.log ('Ejecutando')
}

button.addEventListener('click',play)
button.addEventListener('click',paused)