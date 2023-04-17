const opciones = document.querySelector('.opciones');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(opciones)


opciones.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != opciones){
            menu.classList.toggle("spread")
    }
})