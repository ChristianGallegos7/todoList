const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');


function agregarTarea(tarea){
    const elemento =  `<li>
    <i class="fa-sharp fa-regular fa-circle" data="realizado" id="0"></i>
    <p class="text"> ${tarea} </p>
    <i class="fa-solid fa-trash" data="eliminado" id="0"></i>
    </li>`

    lista.insertAdjacentHTML('beforeend', elemento);
}

botonEnter.addEventListener('click', ()=>{
    const tarea = input.value;
    if(tarea){
        agregarTarea(tarea);
    }
    input.value = '';
})