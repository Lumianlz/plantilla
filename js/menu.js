const menu = document.querySelector('.menu')
const  nav= document.querySelector('.nav')
console.log(menu)
console.log(nav)
menu.addEventListener('click',()=>{
  nav.classList.toggle('show-nav')
})
window.addEventListener('click', e=>{
     if(nav.classList.contains('show-nav') && e.target !=nav && e.target != menu){ nav.classList.toggle('show-nav')

}
})