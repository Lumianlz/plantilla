const imagenes= document.querySelectorAll('.plantilla');
const imageneslight= document.querySelector('.pic-selected');
const contenedor= document.querySelector('.show-pic');
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        aparecerimagen( imagen.getAttribute('src'))
       
        } )
})
contenedor.addEventListener('click', (e)=>{
    if (e.target != imageneslight) {
    contenedor.classList.toggle('show-nav');
    imageneslight.classList.toggle('javapic')
    }
})
const aparecerimagen= (imagen)=>{
    imageneslight.src=imagen;
    contenedor.classList.toggle('show-nav');
    imageneslight.classList.toggle('javapic')
}