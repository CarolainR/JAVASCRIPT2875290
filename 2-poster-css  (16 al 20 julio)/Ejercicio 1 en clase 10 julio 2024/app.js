const input = document.getElementById('input')
const pelota = document.getElementById('pelota')
const btn = document.getElementById('btn');
let e = 0
function mover() {
    if(e == 0){
        pelota.style.marginLeft = '700px';
        pelota.style.transitionDuration = '1s';
        pelota.style.backgroundColor = input.value;
        e=1;
    }
    else{
        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = '#000000';
        pelota.style.transitionDuration = '.5s';
        e=0;
    } 
}
btn.addEventListener('click', mover);