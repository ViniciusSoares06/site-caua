const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav_menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('darkf')
    body.classList.toggle('darkf')
})