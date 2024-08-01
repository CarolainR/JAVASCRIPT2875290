const dateText = document.getElementById('dateText');
const dateYear = document.getElementById('dateYear');
const dateMonth = document.getElementById('dateMonth');
const dateNumber = document.getElementById('dateNumber');

const setDate = () =>{
    const date = new Date();
    dateText.textContent = date.toLocaleString('es', {weekday:'long'})
    dateYear.textContent = date.toLocaleString('es', {year:'numeric'})
    dateMonth.textContent = date.toLocaleString('es',{month:'long'})
    dateNumber.textContent = date.toLocaleString('es', {day:'numeric'})
};

const addNewTask = event => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if (!value) return;
    const task = document.createElement('div');
    const x= document.createElement ('button');

    function eliminarCadaUno (){
        task.innerHTML='';
    }
    x.addEventListener('click', eliminarCadaUno)
    
    
    x.innerText="x"
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState);
    task.textContent = value;
    tasksContainer.prepend(task);
    task.appendChild(x);
    event.target.reset();
}

const changeTaskState = event => {
    event.target.classList.toggle('done');
};
    const cleanButton = document.querySelector('.clean');
    

    function limpiarContenedor (){
        tasksContainer.innerHTML= '';
    }
    cleanButton.addEventListener('click', limpiarContenedor);
    setDate ();