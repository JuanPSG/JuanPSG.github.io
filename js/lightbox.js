const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagenes')
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(imagen =>{
    imagen.addEventListener('clic', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

const aparecerImagen = (imagen)=>{
imagenesLight.src =imagen;
}
