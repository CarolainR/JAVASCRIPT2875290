// Constantes para cada imagen
const batimovil = document.getElementById('bm');
const batgirl = document.getElementById('bg');
const wonderwoman = document.getElementById('ww');
const batman = document.getElementById('bm');
const superman = document.getElementById('sm');

const container = document.querySelector(".container")
let animationPaused = true; // Inicialmente está pausada


//Reproducir la animación
function playAnimation() {
  batimovil.classList.add('animate');
  batgirl.classList.add('animate');
  wonderwoman.classList.add('animate');
  batman.classList.add('animate');
  superman.classList.add('animate');
  document.getElementById('playButton').textContent = 'PAUSE'; //para cambiar el texto del boton
}

//Pausar la animación
function pauseAnimation() {
    batimovil.classList.remove('animate');
    batgirl.classList.remove('animate');
    wonderwoman.classList.remove('animate');
    batman.classList.remove('animate');
    superman.classList.remove('animate');
  document.getElementById('playButton').textContent = 'PLAY';
}

// llamado para el botón PLAY/PAUSE
document.getElementById('playButton').addEventListener('click', function() {
  if (animationPaused) {
    playAnimation();
  } else {
    pauseAnimation();
  }
  animationPaused = !animationPaused; // Invertir el estado de la animación
});