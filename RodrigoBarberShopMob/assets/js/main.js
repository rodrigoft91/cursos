const botaoMenu = document.querySelector('.botao__menu')
const menu = document.querySelector('.menu-lateral')

    botaoMenu.addEventListener('click', () =>{

        menu.classList.toggle('menu-lateral--ativo')


    })